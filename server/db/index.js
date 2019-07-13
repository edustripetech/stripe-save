import { Pool } from 'pg';
import Debug from 'debug';
import dotenv from 'dotenv';

const { config } = dotenv;

config();

const debug = Debug('db');

export default class Model {
  constructor(table) {
    this.table = table;
    this.pool = Model.initConn();
    this.pool.on('error', err => debug(err));
  }

  static initConn() {
    const { DB_DEV } = process.env;

    const connectionString = DB_DEV;
    debug(`Pool Setings: ${connectionString}`);
    return new Pool({ connectionString });
  }

  async select(params, constraint) {
    try {
      const result = await this.pool.query(
        `SELECT ${params} from ${this.table} WHERE ${constraint}`
      );
      debug(result.rows);
      return result.rows;
    } catch (err) {
      debug(err);
      return err;
    }
  }

  async create(params, values, rows) {
    try {
      const result = await this.pool.query(
        `INSERT INTO ${this.table}(${params}) VALUES(${values}) RETURNING ${'*' || rows}`
      );
      debug(result.rows);
      return result.rows;
    } catch (err) {
      debug(err);
      return err;
    }
  }

  async update(params, constraints, rows) {
    try {
      const result = await this.pool.query(
        `UPDATE ${this.table} SET ${params} WHERE ${constraints} RETURNING ${'*' || rows}`
      );
      debug(result.rows);
      return result.rows;
    } catch (err) {
      debug(err);
      return err;
    }
  }
}

export const users = new Model(`users`);
export const accounts = new Model(`accounts`);
export const savings = new Model(`savings`);
