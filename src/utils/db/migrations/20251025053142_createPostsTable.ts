/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('posts')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('fbId', 'varchar')
		.addColumn('message', 'varchar')
		.addColumn('createdDate', 'timestamp')
		.execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
	await db.schema
		.dropTable('posts')
		.execute();
}
