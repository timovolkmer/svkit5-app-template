import { redirect, fail } from '@sveltejs/kit'
import type { Actions } from './$types.js'

export const actions = {
	default: async ({cookies, request, event}) => {
const formData = await request.formData();
        const file = formData.get('file');

        if (!file || file.size === 0) {
            return fail(400, { error: 'No file uploaded' });
        }
		console.log("File uploaded: %d kBytes", file.size/1024)

        // --- Your upload logic here ---
        // Example: Save to disk
        // const bytes = new Uint8Array(await file.arrayBuffer());
        // await writeFile('path/to/save/' + file.name, bytes);

        return { uploaded: true };
	}
} satisfies Actions;