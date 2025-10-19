/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Kysely } from 'kysely'

// replace `any` with your database interface.
export async function seed(db: Kysely<any>): Promise<void> {
	await db
		.insertInto('priority_types')
		.values([{
			id: 1,
			name: 'high'
		}, {
			id: 2,
			name: 'medium'
		}, {
			id: 3,
			name: 'low'
		}, {
			id: 4,
			name: 'default'
		}])
		.execute();
}
