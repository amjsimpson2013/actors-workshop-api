import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { DB } from './context'

const dialect = new PostgresDialect({
    pool: new Pool({
        database: 'actors-workshop-database',
        host: 'localhost',
        user: 'admin',
        port: 5432,
        max: 10,
    })
});

export const db = new Kysely<DB>({
    dialect,
});