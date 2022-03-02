<script lang="ts">
    import { flip } from "svelte/animate";
    import { crossfade } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import axios from 'axios';
    import { Block } from "$lib/ui";
    import type { BlockModel, BlockForm } from "$lib/models";
    import { blocks, setBlocks, addBlock, removeBlock } from "$lib/state";

    export let blockList: BlockModel[] = [];
    setBlocks(blockList);

    const [send, receive] = crossfade({
        duration: 1500,
        easing: quintOut
    })

    async function addNewBlock() {
        const blockInfo: BlockForm = {
            header: "Block",
            body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagit-tis nisl feugiat quis."
        }

        addBlock(blockInfo);

        await axios({ method: "POST", url: "/add-block", data: blockInfo });
    }

    async function removeOneBlock(id: number) {
        removeBlock(id);
        await axios({ method: "DELETE", url: `/remove-block/${id}` });
    }
</script>

<svelte:head>
    <title>A Dev Test</title>
</svelte:head>

<main class="w-full flex flex-col items-center justify-center min-h-screen md:overflow-y-auto">
    <div class="w-11/12 mx-auto my-16 md:max-w-7xl flex flex-col items-center justify-center">
        <h1 class="text-3xl text-center md:text-left">Experienced & Multi-Talented</h1>
        <span class="w-7 border-b-[1.5px] border-white my-6"><!--spacer--></span>
        <p class="text-center w-8/12 md:w-7/12 lg:w-6/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tortor leo, porttitor vel
            dictum at, aliquam et auque. Duis vel molestie risus, ut lobortis felis.
        </p>
        <div class="my-10 flex items-center justify-center flex-wrap items-baseline gap-6">
            {#each $blocks.blocksList as blockItem (blockItem.id)}
                <div in:receive="{{ key: blockItem.id }}" out:send="{{ key: blockItem.id }}" animate:flip="{{ duration: 250 }}">
                    <Block
                      blockModel={blockItem}
                      on:delete={(e) => removeOneBlock(e.detail)}
                    />
                </div>
            {/each}
            <div class="w-72 h-[216px] self-center flex flex-col items-center justify-center">
                <button class="add-button" on:click={addNewBlock}>
                    <span class="text-lg">+</span>
                    <span class="uppercase">Add</span>
                </button>
            </div>
        </div>
    </div>
</main>

<style lang="scss">
    button.add-button {
        @apply w-6/12 mx-auto h-[66.666667%] my-auto rounded-full flex flex-col items-center justify-center bg-zinc-800 hover:bg-zinc-700;
        font-family: 'Gotham', sans-serif;
    }
</style>
