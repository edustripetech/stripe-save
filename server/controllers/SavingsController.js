import Debug from 'debug';
import Model from '../db';
import ServerResponse from '../modules/ServerResponse';

const debug = Debug('dev');

const savings = new Model(`savings`);
const accounts = new Model(`accounts`);
const { successfulRequest } = ServerResponse;

export default class SetSavingsInterval {
  /**
   * @description Method to set saving interval for an acoount
   * @param {object} req
   * @param {object} res
   * @returns {object}
   */
  static async setSavingInterval(req, res, next) {
    try {
      const { accountId } = req.params;
      const { savingInterval, savingAmount } = req.body;
      const configAccount = await accounts.select(
        [`*`],
        [`"accountId"=${parseInt(accountId, 10)}`]
      );
      const savingsToConfigure = await savings.update(
        [`"savingInterval"=${savingInterval}, savingAmount"=${savingAmount}`],
        [`"accountId"=${configAccount[0].accountId}`]
      );
      return successfulRequest(res, 200, savingsToConfigure);
    } catch (err) {
      debug(err);
      return next(err);
    }
  }
}
