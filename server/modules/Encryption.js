import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

const { config } = dotenv;

config();

const { JWT_SECRET } = process.env;

export default class Encryption {
  static encryptPassword(password) {
    return bcrypt.hashSync(password, 10);
  }

  static decryptPassword(encryptedPassword, passwordInput) {
    return bcrypt.compareSync(passwordInput, encryptedPassword);
  }

  static generateUserToken({ id, email, firstName, lastName }) {
    const payload = { id, email, firstName, lastName };
    const token = jwt.sign(payload, JWT_SECRET, {
      expiresIn: '24h'
    });

    return token;
  }
}
