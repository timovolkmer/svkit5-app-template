import "dotenv/config"
import { betterAuth } from "better-auth"
import { prismaAdapter } from "better-auth/adapters/prisma"
import prisma  from "$lib/prisma.ts"
import { sveltekitCookies } from "better-auth/svelte-kit"
import { getRequestEvent } from "$app/server"

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "sqlite", ...etc
    }),

    emailAndPassword: {
        enabled: true,
    },

    plugins: [sveltekitCookies(getRequestEvent)], // make sure this is the last plugin in the array
});
