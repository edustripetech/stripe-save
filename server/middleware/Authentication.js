import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import ResponseSpec from '../modules/ServerResponse';

const { conifg } = dotenv;
conifg();

const { badPostRequest } = ResponseSpec;

export default class Authentication {
  static verifyToken(req, res, next) {
    const bearer = req.headers.authorization;
    if (!bearer) {
      return badPostRequest(res, 403, { message: 'No token provided' });
    }

    const bearerToken = bearer.split(' ');
    const token = bearerToken[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return badPostRequest(res, 401, { message: 'Invalid token provided' });
      }
      req.user = decoded;
      return next();
    });
    return true;
  }
}
