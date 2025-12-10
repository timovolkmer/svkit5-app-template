<script lang="ts">
import { goto } from "$app/navigation"
import { authClient } from "$lib/auth-client.ts"
import type { PageProps } from './$types.ts'

let { data }: PageProps = $props()

const session = authClient.useSession();

if (!session) {
	goto("/");
}
</script>

<h1 class="text-4xl font-bold mt-5">There are the following users in the database</h1>
<table class="w-10/12 m-20 border border-zinc-400 table-auto rounded-md">
    <thead class="table-header-group">
        <tr>
            <th class="p-2 text-left bg-zinc-200 border-b border-b-zinc-400">Id</th>
            <th class="p-2 text-left bg-zinc-200 border-b border-b-zinc-400">Name</th>
            <th class="p-2 text-left bg-zinc-200 border-b border-b-zinc-400">E-Mail</th>
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