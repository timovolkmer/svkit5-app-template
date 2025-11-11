# SvelteKit 5 Application Template

This is an application template basen on SvelteKit 5 which includes authentication using better-auth, database access (postgresql) with prisma, styling with tailwindcss, lucide icons, and a basic navigation. Feel free to clone this repo and use it for your own developments, respecting all applicable licenses.

I try to keep up with changes in the interoperability between the libraries used but can't promise anything ;-) 
I may add more useful libraries in the future. Feel free to contact me in case you have any comments, ideas for improvements or wishes for future developments.

Please refer to the respective documnetations on how to develop Svelte/SvelteKit applications with prisma, better-auth, and tailwind:

- https://svelte.dev/docs/kit/introduction
- https://prisma.io
- https://tailwindcss.com/docs/styling-with-utility-classes
- https://www.better-auth.com/docs/introduction
- https://www.postgresql.org/docs/current/
- https://lucide.dev/guide/packages/lucide-svelte

## Publishing

Go into the `package.json` and give your package the desired name through the `"name"` option. Also consider adding a `"license"` field and point it to a `LICENSE` file which you can create from a template (one popular option is the [MIT license](https://opensource.org/license/mit/)).

To publish your library to [npm](https://www.npmjs.com):

```sh
npm publish
```
