
import prisma from "$lib/prisma.ts"
import type { PageServerLoad } from "./$types.ts"

export const load: PageServerLoad = async ({ params }) => {

	const all_users = await prisma.user.findMany()

	return {
		users: all_users
	}
}