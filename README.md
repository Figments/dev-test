# Limesharp Dev Test

This repository exists to serve the work done towards a frontend test provided by Limesharp. I hope what you find here will be valuable.

### Built With
* SvelteKit
* TypeScript
* TailwindCSS

### Total Time
* 5 hours (including time spent digging through any relevant documentation)

### How To Run

This repository requires the latest NodeJS version.

1) Clone this repository and `cd` into it
2) Run `yarn install` to fetch packages
3) Run `yarn dev` to spin up development server

### What This Entails

All blocks are fetched via an API call which returns a mock dataset. You can click the `Add` button on the main page to add as many blocks as you want, and each one will trigger an API call to add said block to the dataset so that it's persisted on page refreshes. Each block was also give a remove `(-)` button, which also similarly queries against the mock dataset. All blocks are updated on the frontend via Svelte-based clientside state management first, before the API calls are made, though they do not currently handle cases where an error occurs and prevents the creation or removal of a block from the original dataset.

---

Thank you for your consideration!