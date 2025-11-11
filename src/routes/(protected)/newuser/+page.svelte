<script lang="ts">
import { goto } from "$app/navigation";
import { authClient } from "$lib/auth-client.ts";

const session = authClient.useSession();

if (!session) {
	goto("/");
}
</script>

<div id="banner" class="absolute w-screen sm:top-5 md:top-32 lg:top-82 left-0 pl-20 pr-20 md:pr-2 sm:pr-2 pb-2 bg-sky-900 h-80 shadow-2xl">
    <p class="text-sky-50 font-bold pt-4 text-3xl">Yay! You are now a APPLICATION-NAME user, {$session.data?.user.name}.</p>
    <p class="text-sky-50 pt-4">You can log in with your email and password in the future.</p>
    <p class="text-sky-50 pt-4">Use your power wisely, best start <a href="/browse" class="text-amber-500 font-bold hover:underline active:underline">working here</a>.</p>
</div>