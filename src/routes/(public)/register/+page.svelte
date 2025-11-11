<script lang="ts">
import { enhance } from '$app/forms'
import logo from '$lib/assets/EinLogo.png'
import type { PageProps } from './$types'

let { data, form }: PageProps = $props();
</script>

<div id="branding" class="absolute top-24 left-14 place-content-start">
    <img src={logo} alt="Logo"/>
</div>

<div id="banner" class="absolute w-screen sm:top-5 md:top-32 lg:top-82 left-0 pl-20 pr-20 md:pr-2 sm:pr-2 pb-2 bg-sky-900 h-80 shadow-2xl">
    {#if form?.success}
        <p class="text-sky-50 font-bold pt-4 text-3xl">Thank you for registering an ccount for APPLICATION-NAME {form?.name}</p>
        <p class="text-sky-50 pt-4">You are now good to <a href="/browse" class="text-amber-500 font-bold hover:underline active:underline">start working</a>.</p>
    {:else}
        <p class="text-sky-50 font-bold pt-4 text-3xl">Please create a new account <br />to use APPLICATION-NAME </p>
        <div class="z-50 absolute mt-10 w-74 max-w-74 text-lg text-red-300">
            {#if form?.namemissing || form?.emailmissing || form?.pwdmissing }
                <p>Please fill in all required fields.</p>
            {/if}
            {#if form?.pwdnomatch }
            <p>The passwords do not match.</p>
            {/if}
            {#if form?.error }
            <p>An error ocurred when trying to register {form?.name}:</p>
            <p>{form?.message}.</p>
            {/if}
        </div>
        <div id="loginform" class="relative lg:right-24 md:right-2 sm:right-2 -mt-14 text-right text-sky-50">
            <form id="register" name="register" method="POST" use:enhance>
                    <label for="text">Name:</label>
                    {#if form?.namemissing}
                        <input type="text" name="name" id="name" maxlength="64" class="width-82 ml-5 mr-42 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /><br />
                    {:else}
                        <input type="text" name="name" id="name" value={form?.name ?? ''} maxlength="64" class="width-82 ml-5 mr-42 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /><br />
                    {/if}
                    <label for="text">EMail:</label>
                    {#if form?.emailmissing}
                        <input type="text" name="email" id="email" maxlength="64" class="width-82 ml-5 mr-42 mt-5 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /><br />
                    {:else}
                       <input type="text" name="email" id="email" value={form?.email ?? ''} maxlength="64" class="width-82 ml-5 mr-42 mt-5 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /><br />
                    {/if}
                    <label for="text">Password:</label>
                    {#if form?.pwdmissing || form?.pwdnomatch}
                        <input type="password" name="pwd" id="pwd" maxlength="32" class="width-82 ml-6 mr-42 mt-5 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /><br />
                        <label for="text">Re-enter password:</label>
                        <input type="password" name="verpwd" id="verpwd" maxlength="32" class="width-82 ml-6 mt-5 border-sky-50 border bg-sky-100 outline-red-300 outline-offset-2 outline-2 rounded-md text-sky-900" /> 
                    {:else}
                        <input type="password" name="pwd" id="pwd" maxlength="32" class="width-82 ml-6 mr-42 mt-5 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /><br />
                        <label for="text">Re-enter password:</label>
                        <input type="password" name="verpwd" id="verpwd" maxlength="32" class="width-82 ml-6 mt-5 border-sky-50 border bg-sky-200 rounded-md text-sky-900" /> 
                    {/if}
                    <button type="submit" id="submit" name="submit" class="mt-5 ml-5 h-10 w-36 border border-sky-50 hover:bg-sky-200 hover:text-sky-900 rounded-md">
                        Create Account
                    </button>
                    <p class="text-sm mt-5 mr-42">Or <a href="/" class="text-amber-500 font-bold hover:underline active:underline">go back to login</a> if you already have an account.</p>
            </form>
        </div>
    {/if}
</div>