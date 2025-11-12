import {
	Kysely,
	PostgresAdapter,
	PostgresDialect,
	PostgresIntrospector,
	PostgresQueryCompiler,
} from 'kysely'
import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';
import { Pool } from 'pg';
import { DB } from '../src/utils/db/context';
import { PostgresDriver } from 'kysely';

export default defineConfig({
	dialect: {
		createAdapter() {
			return new PostgresAdapter()
		},
		createDriver() {
			const config = {
					pool: new Pool({
							connectionString: process.env.DATABASE_URL,
					}),
				};
			return new PostgresDriver(config)
		},
		createIntrospector() {
			const db = new Kysely<DB>({
				dialect: new PostgresDialect({
					pool: new Pool({
							connectionString: process.env.DATABASE_URL,
					}),
				}),
			});
			return new PostgresIntrospector(db)
		},
		createQueryCompiler() {
			return new PostgresQueryCompiler()
		},
	},
	migrations: {
		migrationFolder: "../src/utils/db/migrations",
		getMigrationPrefix: getKnexTimestampPrefix,
	},
	plugins: [],
	seeds: {
		seedFolder: "../src/utils/db/seeds"
	}
})
