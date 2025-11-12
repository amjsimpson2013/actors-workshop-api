/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Kysely } from 'kysely'

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function up(db: Kysely<any>): Promise<void> {
	await db.insertInto('link_types')
		.values([{
			id: 1,
			name: 'events'
		}, {
			id: 2,
			name: 'about'
		}, {
			id: 3,
			name: 'contacts'
		}])
		.execute();

	await db.insertInto('priority_types')
		.values([{
			name: 'high'
		}, {
			name: 'medium'
		}, {
			name: 'low'
		}, {
			name: 'default'
		}])
		.execute();

	await db.insertInto('event_types')
		.values([{
			name: 'Performance'
		}, {
			name: 'Workshop'
		}, {
			name: `Children's Theater`
		}])
		.execute();

	await db.insertInto('status_types')
		.values([{
			name: 'Scheduled'
		}, {
			name: 'Cancelled'
		}])
		.execute();

	await db.insertInto('reoccurence_types')
		.values([{
			name: 'Daily'
		}, {
			name: 'Weekly'
		}, {
			name: 'Bi-Weekly'
		}, {
			name: 'Monthly'
		}, {
			name: 'Yearly'
		}])
		.execute();
}

// `any` is required here since migrations should be frozen in time. alternatively, keep a "snapshot" db interface.
export async function down(db: Kysely<any>): Promise<void> {
	await db.deleteFrom('link_types')
		.execute();

	await db.deleteFrom('priority_types')
		.execute();

	await db.deleteFrom('event_types')
		.execute();

	await db.deleteFrom('status_types')
		.execute();

	await db.deleteFrom('reoccurence_types')
		.execute();
}
