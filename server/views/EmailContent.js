import dotenv from 'dotenv';
import Debug from 'debug';
import Email from '../modules/Email';
import verifyEmailContent from './verifyEmail';

const { config } = dotenv;
const debug = Debug('dev');
const { sendNoReplyMail } = Email;

config();

export default class EmailContent {
  static async welcomeEmail({ email }) {
    try {
      await sendNoReplyMail(email, 'Welcome to Edustripe!', verifyEmailContent);
      return `Welcome email send check email at ${email}`;
    } catch (err) {
      debug(err);
      throw new Error(err);
    }
  }
}
