<script lang="ts">
import { enhance } from '$app/forms'
import logo from '$lib/assets/EinLogo.png'
import type { PageProps } from './$types'

let { data, form }: PageProps = $props()

</script>

<div id="branding" class="absolute top-24 left-14 place-content-start">
    <img src={logo} alt="Logo"/>
</div>

<div id="banner" class="absolute w-screen sm:top-5 md:top-32 lg:top-82 left-0 pl-20 pr-20 pt-4 pb-2 bg-sky-900 h-80 shadow-2xl">
    <p class="text-sky-50 font-bold text-3xl">Welcome to APPLICATION-NAME</p>
    <p class="text-sky-50 font-light text-lg">Please log in to start working</p>
    {#if form?.error}
        <div class="z-50 absolute mt-10 w-74 max-w-74 text-lg text-red-300">
            <p>Login failed: {form?.message}.</p>
        </div>
    {/if}
    <div id="loginform" class="relative right-36 -mt-8 text-right text-sky-50">
        <form id="login" name="login" method="POST" use:enhance>
                <label for="text">EMail:</label>
                {#if form?.error}
                    <input type="text" name="email" id="email" required value="{form?.email ?? ''}" maxlength="32" class="width-82 ml-5 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /><br />
                {:else}
                    <input type="text" name="email" id="email" required maxlength="32" class="width-82 ml-5 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /><br />
                {/if}
                <label for="text">Password:</label>
                {#if form?.error}
                    <input type="password" name="pwd" id="pwd" required maxlength="32" class="width-82 ml-6 mt-5 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /><br />
                {:else}
                    <input type="password" name="pwd" id="pwd" required maxlength="32" class="width-82 ml-6 mt-5 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /><br />
                {/if}
                <button type="submit" id="submit" name="submit" class="mt-5 ml-64 h-10 w-24 border border-sky-50 hover:bg-sky-200 hover:text-sky-900 rounded-md">
                Login
                </button>
                <p class="text-sm mt-5">Or <a href="/register" class="text-amber-500 font-bold hover:underline active:underline">create an account</a> if you don't have one yet.</p>
        </form>
    </div>
</div>