<script lang="ts">
import { enhance } from '$app/forms'
import { goto } from "$app/navigation"
import { authClient } from "$lib/auth-client.ts"
import type { PageProps } from './$types'

let { data, form }: PageProps = $props()

const session = authClient.useSession();

if (!session) {
	goto("/");
}
</script>

<h2 class="text-xl font-bold">Upload a ZIP-Archive:</h2>

<div id="uploadform" class="relative align-middle mt-10 w-full">
    <form id="upload" name="login" method="POST" enctype="multipart/form-data" use:enhance>
            <label for="text">Select a ZIP-Archive:</label>
            {#if form?.error}
                <input type="file" name="file" id="file" accept=".zip,.ZIP" required maxlength="32" class="align-middle width-82 h-10 ml-5 border-sky-900 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" />
            {:else}
                <input type="file" name="file" id="file" accept=".zip,.ZIP" required maxlength="32" class="align-middle width-82 h-10 ml-5 border-sky-900 border bg-sky-200 rounded-md text-sky-900" />
            {/if}
            
            <button type="submit" id="submit" name="submit" class="align-middle ml-10 h-10 w-24 bg-sky-900 border text-sky-100 border-sky-900 hover:text-sky-500 rounded-md">
            Upload
            </button>
    </form>
</div>
<div id="messages" class="mt-10">
    {#if form?.uploaded}
        <p>File uploaded successfully!</p>
    {:else if form?.error}
        <p>An error occurred: {form?.message}.</p>
    {/if}
</div>