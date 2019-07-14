import Joi from '@hapi/joi';
import authSchema from '../validation/authSchema';
import ServerResponse from '../modules/ServerResponse';

const { badPostRequest } = ServerResponse;
const { registration } = authSchema;

export default class AuthValidation {
  static validateRegistration(req, res, next) {
    Joi.validate(req.body, registration, { abortEarly: false }, err => {
      const errors = {};
      if (err) {
        err.details.forEach(error => {
          const newError = error;
          errors[newError.context.key] = newError.message;
        });
        return badPostRequest(res, 400, errors);
      }
      return next();
    });
  }
}
