import { writable } from "svelte/store";
import type { BlockForm, BlockModel } from "$lib/models";

interface BlockState {
    blocksList: BlockModel[];
}

export const blocks = writable<BlockState>({ blocksList: [] });

//#region ---HELPERS---

export function setBlocks(blocksToSet: BlockModel[]) {
    blocks.set({ blocksList: blocksToSet });
}

export function addBlock(formInfo: BlockForm) {
    blocks.update((state) => ({
        ...state, // in case i ever add anything to BlockState, this will make sure fields unnecessary for this function are ignored
        blocks: [...state.blocksList, createBlock(state.blocksList.length + 1, formInfo)],
    }));
}

export function removeBlock(id: number) {
    blocks.update((state) => ({
        ...state, // in case i ever add anything to BlockState, this will make sure fields unnecessary for this function are ignored
        blocks: state.blocksList.filter(block => block.id !== id),
    }));
}

export function clearBlocks() {
    blocks.update((state) => ({
        ...state, // in case i ever add anything to BlockState, this will make sure fields unnecessary for this function are ignored
        blocks: [],
    }));
}

function createBlock(id: number, formInfo: BlockForm): BlockModel {
    return {
        id,
        header: formInfo.title,
        body: formInfo.body,
    }
}

//#endregion