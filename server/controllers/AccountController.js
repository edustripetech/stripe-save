import cron from "node-cron";
import mockData from "../mocks";

// Accounts controller
const { log } = console;
const { accounts } = mockData;

export default class AccountController {
  static getAllAccounts(req, res) {
    res.status(200).json({
      status: "success",
      data: accounts
    });
  }

  static getAccountsByUser(req, res) {
    const { id } = req.params;
    const userAccounts = accounts.filter(
      ownerAccounts => ownerAccounts.owner === parseInt(id, 10)
    );
    res.status(200).json({
      status: "success",
      data: userAccounts
    });
  }

  static setSavingsInterval(req, res) {
    const { id } = req.params;
    const { savingInterval, debitAmount } = req.body;
    const userAccount = accounts.find(
      account => account.id === parseInt(id, 10)
    );
    userAccount.savingsInterval = savingInterval;
    const debitInterval = userAccount.savingsInterval / 60000;
    cron.schedule(`0 */${debitInterval} * * * *`, () => {
      if (userAccount.balance < debitAmount) {
        log("Insufficient funds");
      } else {
        const debited = userAccount.balance - parseInt(debitAmount, 10);
        userAccount.balance = debited;
        log(`user debited: ${debitAmount}`);
        log(`Balance is now ${userAccount.balance}`);
        return debited;
      }
      return true;
    });

    return res.status(200).json({
      status: "success",
      message: `Your account has been set up to debit ${debitAmount} every ${debitInterval} minutes`
    });
  }
}
