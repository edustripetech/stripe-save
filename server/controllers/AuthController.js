import Debug from 'debug';
import ServerResponse from '../modules/ServerResponse';
import Encryption from '../modules/Encryption';
import { users } from '../db';
import isEmpty from '../utils/isEmpty';
import EmailContent from '../views/EmailContent';

const { encryptPassword, generateUserToken, decryptPassword } = Encryption;
const { badPostRequest, successfulRequest } = ServerResponse;
const { welcomeEmail } = EmailContent;
const debug = Debug('dev');

export default class Auth {
  static async register(req, res, next) {
    try {
      const { email, password, firstName, lastName } = req.body;
      const existingUser = await users.select([`"email"`], [`"email" = '${email}'`]);
      if (!isEmpty(existingUser)) {
        return badPostRequest(res, 409, { email: 'User already exists' });
      }
      const encryptedPassword = encryptPassword(password);
      const newUser = await users.create(
        ['"firstName"', '"lastName"', '"email"', '"password"'],
        [`'${firstName}', '${lastName}', '${email}', '${encryptedPassword}'`]
      );
      const message = 'Thank you for registering for Edustripe!';
      const token = generateUserToken(newUser[0]);
      welcomeEmail(req.body);
      return successfulRequest(res, 201, { message, token });
    } catch (err) {
      debug(err);
      return next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await users.select(['*'], [`"email"='${email}'`]);
      if (isEmpty(user)) {
        return badPostRequest(res, 404, { message: 'Invalid email or password' });
      }
      const validPassword = await decryptPassword(user[0].password, password);
      if (!validPassword) {
        return badPostRequest(res, 404, { message: 'Invalid email or password' });
      }

      const token = generateUserToken(user[0]);
      return successfulRequest(res, 200, { token });
    } catch (err) {
      debug(err);
      return next(err);
    }
  }
}
