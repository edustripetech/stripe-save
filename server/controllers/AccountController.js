import Debug from 'debug';
import ServerResponse from '../modules/ServerResponse';
import { users, accounts } from '../db';

const debug = Debug('dev');

export default class AccountController {
  static create(req, res, next) {
    try {
    } catch (err) {
      return next(err);
    }
  }
}
