<script lang="ts">
    import type { BlockModel } from "$lib/models";
    import { Button } from "$lib/ui";

    export let blockModel: BlockModel;
    let isOpen = false;
    let body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagittis nisl feugiat quis.'
    let truncatedBody = body.split('.');
</script>

<div class="flex flex-col items-center justify-center w-72 transition transform">
    <div class="py-4 w-full text-center rounded-t-[0.25rem]" style="background: rgb(89, 101, 95)">
        <h2 class="italic text-4xl font-serif">i</h2>
    </div>
    <div class="bg-black w-full text-center p-4 pt-5">
        <h4 class="uppercase text-xs tracking-wide pb-2">Block</h4>
        <p lang="en" class="mx-auto max-w-[217px]">
            {#if isOpen}
                {@html body}
            {:else}
                {@html truncatedBody[0]}.
            {/if}
        </p>
        <div class="flex justify-center pt-2">
            {#if isOpen}
                <Button isRounded="true" on:click={() => isOpen = false}>
                    <span class="relative -top-[0.075rem]">
                        –
                    </span>
                </Button>
            {:else}
                <Button on:click={() => isOpen = true}>+</Button>
            {/if}
        </div>
    </div>
</div>