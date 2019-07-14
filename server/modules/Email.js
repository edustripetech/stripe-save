import sgMail from '@sendgrid/mail';
import dotenv from 'dotenv';
import Debug from 'debug';

const { config } = dotenv;

config();

const debug = Debug('dev');

const { SENDGRID_API_KEY } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

/**
 * @description Email sender
 * @exports
 * @class Email
 */
export default class Email {
  static async sendNoReplyMail(receiver, subject, content) {
    const emailOpts = {
      to: receiver,
      from: 'Edustripe <no-reply@edustripe.com',
      subject,
      html: content
    };

    try {
      await sgMail.send(emailOpts);
      debug('Sent Email');
    } catch (err) {
      debug(err);
      throw new Error(err);
    }
  }
}
