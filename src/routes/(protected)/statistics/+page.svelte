<script lang="ts">
import { goto } from "$app/navigation"
import { authClient } from "$lib/auth-client.ts"
import type { PageProps, PageData } from './$types'

let { data }: PageProps = $props()

const session = authClient.useSession();

if (!session) {
	goto("/");
}
</script>

<h2 class="text-xl font-bold">All Users</h2>
<table class="w-10/12 m-20 border border-zinc-400 table-auto rounded-md">
    <thead class="table-header-group">
        <tr>
            <td class="p-2 table-cell">Id</td>
            <td class="p-2">Name</td>
            <td class="p-2">E-Mail</td>
        </tr>
    </thead>
    <tbody class="table-row-group">
        {#each data.users as user}
            <tr>
                <td class="p-2">{user.id}</td>
                <td class="p-2">{user.name}</td>
                <td class="p-2">{user.email}</td>
            </tr>
        {/each}
    </tbody>    
</table>