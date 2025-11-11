
import { PrismaClient } from '../../../../prisma/src/generated/prisma/client.ts';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {

	const db = new PrismaClient()

	const all_users = await db.user.findMany()

	return {
		users: all_users
	}
}