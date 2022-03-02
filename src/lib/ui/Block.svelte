<script lang="ts">
    import { slide, fade } from "svelte/transition";
    import { createEventDispatcher } from "svelte";
    import type { BlockModel } from "$lib/models";
    import { Button } from "$lib/ui";
    import { quintOut } from "svelte/easing";

    export let blockModel: BlockModel = {
        id: 0,
        header: "Block",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagittis nisl feugiat quis."
    };
    let isOpen = false;
    let truncatedBody = blockModel.body.split('.');
    const dispatch = createEventDispatcher();
</script>

<div
  class="flex flex-col items-center justify-center w-72 min-h-[216px] max-h-[264px]"
  in:fade="{{ duration: 250 }}" out:fade="{{ duration: 100 }}"
>
    <div class="py-4 w-full text-center rounded-t-[0.25rem]" style="background: rgb(89, 101, 95)">
        <h2 class="italic text-4xl font-serif">i</h2>
    </div>
    <div class="bg-black w-full text-center p-4 pt-5">
        <h4 class="uppercase text-xs tracking-wide pb-2">{@html blockModel.header}</h4>
        {#if isOpen}
            <p lang="en" class="mx-auto max-w-[218px]" transition:slide|local="{{ easing: quintOut }}">
                {@html blockModel.body}
            </p>
        {:else}
            <p lang="en" class="mx-auto max-w-[218px]" transition:slide|local="{{ easing: quintOut }}">
                {@html truncatedBody[0]}.
            </p>
        {/if}
        <div class="flex justify-center pt-2">
            {#if isOpen}
                <Button isRounded title="Show Less" on:click={() => isOpen = false}>
                    <span class="relative -top-[0.075rem]">
                        –
                    </span>
                </Button>
            {:else}
                <Button isRounded title="Show More" on:click={() => isOpen = true}>+</Button>
            {/if}
            <div class="mx-1 text-xl relative top-[0.075rem]">/</div>
            <Button isRounded title="Remove" on:click={() => dispatch('delete', blockModel.id)}>
                <span class="text-xs">
                    x
                </span>
            </Button>
        </div>
    </div>
</div>