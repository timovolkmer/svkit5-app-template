<script lang="ts">
import logo from '$lib/assets/Logo.png'
import { authClient } from "$lib/auth-client.ts"
import type { PageProps } from './$types.ts'

let { data }: PageProps = $props()

const session = authClient.useSession()

</script>

<div id="branding" class="absolute top-24 left-14 place-content-start">
    <img src={logo} alt="Logo"/>
</div>

<div id="banner" class="absolute w-screen sm:top-5 md:top-32 lg:top-82 left-0 pl-20 pr-20 md:pr-2 sm:pr-2 pb-2 bg-sky-900 h-80 shadow-2xl">
    {#if !$session.data}
        <p class="text-sky-50 font-bold pt-4 text-3xl">Thank you for using APPLICATION-NAME </p>
        <p class="text-sky-50 pt-4">You've been logged out. <a href="/" class="text-amber-500 font-bold hover:underline active:underline">Click here to log back in</a>.</p>
    {:else}
        <p class="text-sky-50 font-bold pt-4 text-3xl">Something went wrong ....</p>
        <p class="text-sky-50 pt-4">Your session might still be active. 
            <a href="/browse/" class="text-amber-500 font-bold hover:underline active:underline">Go back an try logging out again</a> or 
            <a href="/" class="text-amber-500 font-bold hover:underline active:underline">Log back in.</a>
        </p>
    {/if}
</div>