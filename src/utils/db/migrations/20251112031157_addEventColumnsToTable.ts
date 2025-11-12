/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('event_types')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'varchar')
		.execute();

	await db.schema
		.createTable('status_types')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'varchar')
		.execute();

	await db.schema
		.createTable('reoccurence_types')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'varchar')
		.execute();
		
	await db.schema
		.alterTable('events')
		.addColumn('name', 'varchar')
		.addColumn('start_date', 'timestamp')
		.addColumn('end_date', 'timestamp')
		.addColumn('description', 'text')
		.addColumn('image_name', 'varchar')
		.addColumn('image_type', 'varchar')
		.addColumn('event_type_id', 'integer', (col) => col.references('event_types.id').onDelete('no action').notNull())
		.addColumn('status_type_id', 'integer', (col) => col.references('status_types.id').onDelete('no action').notNull().defaultTo(1))
		.addColumn('reoccurence_type_id', 'integer', (col) => col.references('reoccurence_types.id').onDelete('no action'))
		.execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
	await db.schema
		.alterTable('events')
		.dropColumn('name')
		.dropColumn('start_date')
		.dropColumn('end_date')
		.dropColumn('description')
		.dropColumn('image_name')
		.dropColumn('image_type')
		.dropColumn('event_type_id')
		.dropColumn('status_type_id')
		.dropColumn('reoccurence_type_id')
		.execute();

	await db.schema
		.dropTable('event_types')
		.execute();

	await db.schema
		.dropTable('status_types')
		.execute();

	await db.schema
		.dropTable('reoccurence_types')
		.execute();
}
