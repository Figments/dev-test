<script lang="ts">
    import { Block } from "$lib/ui";
</script>

<svelte:head>
    <title>A Dev Test</title>
</svelte:head>

<main class="w-full flex flex-col items-center justify-center min-h-screen md:overflow-y-auto">
    <div class="w-11/12 mx-auto my-10 md:max-w-7xl flex flex-col items-center justify-center">
        <h1 class="text-3xl">Experienced & Multi-Talented</h1>
        <span class="w-7 border-b-[1.5px] border-white my-6"><!--spacer--></span>
        <p class="text-center w-8/12 md:w-7/12 lg:w-6/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor leo, porttitor vel
            dictum at, aliquam et auque. Duis vel molestie risus, ut lobortis felis.
        </p>
        <div class="my-10 flex items-center justify-center flex-wrap items-baseline gap-6">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </div>
    </div>
</main>
