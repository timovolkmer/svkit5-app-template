<script lang="ts">
import { goto } from "$app/navigation";
import { authClient } from "$lib/auth-client.ts";

const session = authClient.useSession();

if (!session) {
	goto("/");
}
</script>

<div id="welcome" class="absolute top-24 left-24 place-content-start">
    <p>Welcome {$session.data?.user.name}!</p>
</div>
