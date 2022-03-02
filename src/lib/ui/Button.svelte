<script lang="ts">
    export let isRounded = false;
</script>

<button tabindex="0" class:round={isRounded} on:click>
    <slot />
</button>

<style lang="scss">
    button {
        @apply text-white rounded-full py-0.5 px-2.5 flex items-center justify-center;
        font-family: "Proxima Nova", sans-serif;
        background: rgb(29, 32, 37);
        &:hover {
            background: rgb(36, 37, 40);
        }
        &.round {
            @apply w-[28px] h-[28px];
        }
    }
</style>