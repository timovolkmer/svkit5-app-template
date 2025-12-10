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

<div id="welcome" class="absolute top-24 left-24 place-content-start">
    <p class="text-2xl fornt-bold p-8">Welcome {$session.data?.user.name}!</p>
</div>
