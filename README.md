# SvelteKit 5 Application Template with Better-Auth v1.4 and Prisma v7.1

This is an application template for SvelteKit 5 using better-auth (v1.4) for authentication, prisma v7.1 ORM for database access (configured for postgreSQL), styling with tailwindcss, and lucide icons. It demonstrates simple E-Mail authentication (using Better-auth backend client access) and simple routing in SvelteKit, including a database access to fetch user data. Feel free to clone this repo and use it for your own developments, respecting all applicable licenses.

I try to keep up with changes in the interoperability between the libraries used but can't promise anything ;-) 
I may add more useful libraries in the future. Feel free to contact me in case you have any comments, ideas for improvements or wishes for future developments.

Please refer to the respective documnetations on how to develop Svelte/SvelteKit applications with prisma, better-auth, and tailwind:

- https://svelte.dev/docs/kit/introduction
- https://prisma.io
- https://tailwindcss.com/docs/styling-with-utility-classes
- https://www.better-auth.com/docs/introduction
- https://www.postgresql.org/docs/current/
- https://lucide.dev/guide/packages/lucide-svelte

## Getting Started

To start working with this template, perform the following steps

### Clone this repository:
```
git clone https://github.com/timovolkmer/svkit5-app-template.git
cd svkit5-app-template
```

### Set up your PostegreSQL database:
Install PostegreSQL server on your system (https://www.postgresql.org/docs/current/) and create an empty database and a user with sufficient access rights to create tables in that database. 

### Generate a Better-Auth secret and set up .env:
Better-Auth has already been installed with this template but we need to perform a few steps to get it up and running. First, create a secret value that is used for encryption and hashing. This must be at least 32 characters long and should be generated with high entropy. You can, for example, use the following command to generate one:
```
openssl rand -base64 32
```
You can also use the Better-Auth online generator to the same, see:  https://www.better-auth.com/docs/installation.

Your .env file should look like this:
```
DATABASE_URL="postgresql://[dbuser]:[dbpassword]@localhost:5432/[dbname]?schema=public"

# Better-Auth 
BETTER_AUTH_SECRET=8rZJJZzNfC3mxSpP2nAuI0RdSokncg3G
BETTER_AUTH_URL=http://localhost:5173 # Base URL of your app
```

### Run prepare & prisma generate:
First you must generate required config files (e.g. .svelte-kit/tsconfig.json)by running npm prepare before you can run prisma generate to generate the prisma client. Afterwards you can migrate your database schema:
```
npm prepare
npx prisma generate
npx prisma migrate dev
```

### Run npm install
Now you must run npm install:
```
npm install
```

### Check everything is running
You should now be ready to go. Start the application in dev mode by:
```
npm run dev
````

