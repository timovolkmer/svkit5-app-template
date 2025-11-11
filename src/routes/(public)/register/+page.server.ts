import { redirect, fail } from '@sveltejs/kit'
import { auth } from "$lib/auth.ts"
import type { Actions } from './$types.js'

export const actions = {
	default: async ({cookies, request, event}) => {

        const data = await request.formData()
		const name = data.get('name')
		const email = data.get('email')
		const password = data.get('pwd')
		const verifypassword = data.get('verpwd')

		if (!email) {
			return fail(400, { name, emailmissing: true })
		}
		if (!name) {
			return fail(400, { email, namemissing: true })
		}
		if (!password || !verifypassword) {
			return fail(400, { email, name, pwdmissing: true })
		}
		if (password !== verifypassword) {
			return fail(400, { email, name, pwdnomatch: true })
		}

		// Register the user
		try {
			const response = await auth.api.signUpEmail({
				body: {
					name: name, // required
					email: email, // required
					password: password, // required
				},
				asResponse: true
			})
			if (response.ok) {
				return redirect(303, "/newuser")
			}
			else {
				let messagetext = "User could not be created (" + response.status + "). Please contact your administrator."
				if (response.status == 422) {
					messagetext = "A user with this email already exists"
				}
				return fail(400, { email, name, error: true, message: messagetext, status: response.status })
			}
			
		} catch (error) {
			console.log("Error when trying to register new user " + name + " with email " + email + ".")
			console.log(error.message, error.status)

			return fail(400, { email, name, error: true, message: error.message, status: error.status  })
		}

        return redirect(303, "/newuser")

	}
} satisfies Actions;