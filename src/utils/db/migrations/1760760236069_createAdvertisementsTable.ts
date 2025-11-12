/* eslint-disable @typescript-eslint/no-explicit-any */
import { sql, type Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.schema
		.createTable('events')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.execute();
	
	await db.schema
		.createTable('link_types')
		.addColumn('id', 'integer', (col) => col.primaryKey())
		.addColumn('name', 'varchar')
		.execute();

	await db.schema
		.createTable('priority_types')
		.addColumn('id', 'integer', (col) => col.primaryKey())
		.addColumn('name', 'varchar')
		.execute();

	await db.schema
		.createTable('advertisements')
		.addColumn('id', 'serial', (col) => col.primaryKey())
		.addColumn('name', 'varchar', (col) => col.notNull())
		.addColumn('summary', 'varchar')
		.addColumn('image_name', 'varchar', (col) => col.notNull())
		.addColumn('image_type', 'varchar', (col) => col.notNull())
		.addColumn('link_type_id', 'integer', 
			(col) => col.references('link_types.id').onDelete('no action'))
		.addColumn('linked_id', 'integer',
			(col) => col.references('events.id').onDelete('restrict')
		)
		.addColumn('priority_id', 'integer',
			(col) => col.references('priority_types.id').onDelete('no action').notNull()
		)
		.addColumn('start_date', 'date', (col) => col.notNull())
		.addColumn('end_date', 'date', (col) => col.notNull())
		.addColumn('created_date', 'timestamp', 
			(col) => col.notNull().defaultTo(sql`now()`))
		.addColumn('created_user', 'varchar', 
			(col) => col.notNull().defaultTo(sql`current_user`))
		.addColumn('updated_date', 'timestamp')
		.addColumn('updated_user', 'varchar')
		.execute();
}

export async function down(db: Kysely<any>): Promise<void> {
	await db.schema
		.dropTable('events')
		.execute();
	
	await db.schema
		.dropTable('link_types')
		.execute();

	await db.schema
		.dropTable('priority_types')
		.execute();

	await db.schema
		.dropTable('advertisements')
		.execute();
}
