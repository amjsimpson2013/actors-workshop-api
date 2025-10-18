import {
	DummyDriver,
	Kysely,
	PostgresAdapter,
	PostgresDialect,
	PostgresIntrospector,
	PostgresQueryCompiler,
} from 'kysely'
import { defineConfig, getKnexTimestampPrefix } from 'kysely-ctl';
import { Pool } from 'pg';
import { DB } from 'kysely-codegen';



export default defineConfig({
	// replace me with a real dialect instance OR a dialect name + `dialectConfig` prop.
	dialect: {
		createAdapter() {
			return new PostgresAdapter()
		},
		createDriver() {
			return new DummyDriver()
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
