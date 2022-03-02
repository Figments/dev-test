import { writable } from "svelte/store";
import type { BlockModel } from "$lib/models";
import type { BlockForm } from "$lib/models/block-form";

interface BlockState {
    blocksList: BlockModel[];
    currentId: number;
}

export const blocks = writable<BlockState>({ blocksList: [], currentId: 0 });

//#region ---HELPERS---

export function setBlocks(blocksToSet: BlockModel[]) {
    // need to find the max ID value in the incoming blocks list so this is set correctly
    const maxId = blocksToSet.reduce((max, block) => (block.id > max ? block.id : max), blocksToSet[0].id);
    blocks.update((state) => ({
        ...state, // ignore any other potential fields
        blocksList: blocksToSet,
        currentId: maxId
    }));
}

export function addBlock(formInfo: BlockForm) {
    blocks.update((state) => {
        const newBlock: BlockModel = {
            id: state.currentId + 1,
            header: formInfo.header,
            body: formInfo.body,
        }
        state.blocksList = [...state.blocksList, newBlock];
        state.currentId++;
        return state;
    });
}

export function removeBlock(id: number) {
    blocks.update((state) => ({
        ...state, // ignore any other potential fields
        blocksList: state.blocksList.filter(block => block.id !== id),
    }));
}

export function clearBlocks() {
    blocks.update((state) => ({
        ...state, // ignore any other potential fields
        blocksList: [],
        currentId: 0,
    }));
}

//#endregion