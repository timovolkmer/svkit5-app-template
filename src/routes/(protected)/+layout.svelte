<script lang="ts">
	import '../../app.css';
	import logo from '$lib/assets/Logo.png'
	import { authClient } from "$lib/auth-client.ts"
	import { Power } from '@lucide/svelte'
	import { goto } from '$app/navigation'

	const session = authClient.useSession()

	let { children } = $props()
</script>

<div id="topnavigation" class="absolute w-full h-16 top-0 left-0 pl-2 pr-2 pt-2 pb-2 m-0 bg-sky-900 text-sky-200 font-bold shadow-xl">
	<header>
	<a href="/start/"><img src={logo} alt="Logo" height="32" class="relative inline-block m-0 p-0"/></a>
	<nav class="inline-block align-middle">
		<ul class="relative flex list-none">
			<li class="ml-10 cursor-pointer text-sky-200 hover:text-white active:text-sky-500">
				<a href="/start/">Start</a>
			</li>
			<li class="ml-10 cursor-pointer text-sky-200 hover:text-white active:text-sky-500">
				<a href="/users/">Users</a>
			</li>
			<li class="ml-10 cursor-pointer text-sky-200 hover:text-white active:text-sky-500">
				<a href="/about/">About</a>
			</li>
		</ul>
		<div class="absolute inline-block top-4 right-5 w-max-96 font-light align-middle place-content-end">
			<div class="relative flex align-middle whitespace-nowrap text-nowrap"> 
			Welcome&nbsp;{$session.data?.user.name}
			<button
			class="ml-10 text-sky-200 hover:text-white active:text-sky-500"
			onclick={async () =>
				await authClient.signOut({
					fetchOptions: {
						onSuccess: () => {
							goto('/logout/');
						}
					}
				})}><Power size="24" strokeWidth="3" /></button>
			</div>
		</div>
	</nav>
	</header>
</div>
<div id="pagecontent" class="relative top-16 w-full h-full m-5 text-zinc-800">
{@render children()}
</div>
