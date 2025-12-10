import { redirect, fail } from '@sveltejs/kit'
import { auth } from "$lib/auth.ts"
import type { Actions } from './$types.js'

export const actions = {
	default: async ({cookies, request, event}) => {

        const data = await request.formData()
		const email = data.get('email')
		const password = data.get('pwd')

		// Log user in 
		const response = await auth.api.signInEmail({
    		body: {
				email: email, // required
				password: password, // required
    		},
			asResponse: true
		})
		if (response.ok) {
			redirect( 303, "/start/")
		}
		else {
			return fail(400, { email, error: true, message: response.statusText })
		}
        

	}
} satisfies Actions;