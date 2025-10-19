/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Kysely } from 'kysely'

// replace `any` with your database interface.
export async function seed(db: Kysely<any>): Promise<void> {
	await db
		.insertInto('link_types')
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
}
