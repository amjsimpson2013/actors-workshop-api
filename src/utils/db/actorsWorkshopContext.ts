import { Kysely, PostgresDialect } from "kysely";
import { types } from "pg";
import { DB } from './context'
import * as pg from 'pg';

pg.types.setTypeParser(types.builtins.TIMESTAMP, val => val === null ? null : new Date(val));
pg.types.setTypeParser(types.builtins.INT4, val => parseInt(val));

const dialect = new PostgresDialect({
    pool: new pg.Pool({
        connectionString: process.env["DATABASE_URL"],
    })
});

export const db = new Kysely<DB>({
    dialect: dialect,
});