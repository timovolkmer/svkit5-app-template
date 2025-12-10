<script lang="ts">
import { goto } from "$app/navigation"
import { authClient } from "$lib/auth-client.ts"
import type { PageProps } from './$types.ts'

let { data }: PageProps = $props()

const session = authClient.useSession()

if (!session) {
	goto("/");
}
</script>

<div id="contentwrapper" class="p-10">
    <h1 class="text-4xl font-bold mt-5">About</h1>
    <h2 class="text-3xl font-bold mt-5">SvelteKit 5 Application Template</h2>

    <h3 class="text-2xl font-bold mt-5">General</h3>

    <p class="text-left text-lg mb-2 whitespace-break-spaces">This is an application template basen on SvelteKit 5 which includes authentication using better-auth,
    database access (postgreSQL) with prisma, styling with tailwindcss, lucide icons, and a basic navigation.
    Feel free to clone this repo and use it for your own developments, respecting all applicable licenses.</p>

    <p class="text-left text-lg mb-2  whitespace-break-spaces">I try to keep up with changes in the interoperability between the libraries used but can't promise anything ;-) 
    I may add more useful libraries in the future. Feel free to contact me in case you have any comments, ideas for
    improvements or wishes for future developments.</p>

    <h3 class="text-2xl font-bold mt-5">Dependencies</h3>

    <p class="text-left text-lg mb-2 whitespace-break-spaces">Please refer to the respective documnetations on how to develop Svelte/SvelteKit applications with prisma, better-auth, and tailwind:</p>

    <ul class="text-left text-lg mb-2">
        <li class="list-disc list-inside pl-4"><a href="https://svelte.dev/docs/kit/introduction" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">SvelteKit introduction & docs</a></li>
        <li class="list-disc list-inside pl-4"><a href="https://prisma.io" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">Prisma ORM</a></li>
        <li class="list-disc list-inside pl-4"><a href="https://tailwindcss.com/docs/styling-with-utility-classes" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">Tailwindcss documentation</a></li>
        <li class="list-disc list-inside pl-4"><a href="https://www.better-auth.com/docs/introduction" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">Better-Auth introdcution & docs</a></li>
        <li class="list-disc list-inside pl-4"><a href="https://www.postgresql.org/docs/current/" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">PostgreSQL documentation</a></li>
        <li class="list-disc list-inside pl-4"><a href="https://lucide.dev/guide/packages/lucide-svelte" class="underline text-sky-700 hover:text-zinc-700 active:text-sky-500">Lucide-Svelte documentation</a></li>
    </ul>
</div>