import { Client } from 'pg';
import dotenv from 'dotenv';
import Debug from 'debug';

const debug = Debug('db');

const { config } = dotenv;

config();

const { DB_DEV } = process.env;

const connString = new Client({ connectionString: DB_DEV });

connString.connect();

(async () => {
  try {
    const query = `
    DROP TABLE IF EXISTS users, accounts, savings CASCADE;
    CREATE TABLE IF NOT EXISTS users (
      "id" SERIAL PRIMARY KEY,
      "firstName" VARCHAR NOT NULL,
      "lastName" VARCHAR NOT NULL,
      "password" TEXT NOT NULL,
      "email" VARCHAR unique NOT NULL,
      "createdOn" DATE,
      "avatar" TEXT,
      "isVerified" boolean
    );

    CREATE TABLE IF NOT EXISTS accounts (
      "id" SERIAL PRIMARY KEY,
      "accountNumber" NUMERIC,
      "balance" NUMERIC,
      "ownerId" INT,
      "createdOn" DATE
    );

    CREATE TABLE IF NOT EXISTS savings (
      "id" integer PRIMARY KEY,
      "accountId" INT NOT NULL,
      "ownerId" INT,
      "savingInterval" numeric,
      "savingAmount" numeric
    );

    ALTER TABLE "accounts" ADD FOREIGN KEY ("ownerId") REFERENCES "users" ("id");

    ALTER TABLE "savings" ADD FOREIGN KEY ("accountId") REFERENCES "accounts" ("id");

    ALTER TABLE "savings" ADD FOREIGN KEY ("ownerId") REFERENCES "users" ("id");
    `;
    const seeder = await connString.query(query);
    debug(seeder);
    connString.end();
  } catch (err) {
    debug(err.message);
    connString.end();
  }
})();
