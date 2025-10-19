import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { DB } from './context'

const connString = process.env["DATABASE_URL"];

const dialect = new PostgresDialect({
    pool: new Pool({
        connectionString: connString,
        max: 10,
    })
});

export const db = new Kysely<DB>({
    dialect,
});