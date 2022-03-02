import type { BlockModel } from "$lib/models";

export let blockList: BlockModel[] = [
    {
        id: 1,
        header: "Block",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagit-tis nisl feugiat quis."
    },
    {
        id: 2,
        header: "Block",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagit-tis nisl feugiat quis."
    },
    {
        id: 3,
        header: "Block",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagit-tis nisl feugiat quis."
    },
    {
        id: 4,
        header: "Block",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vestibulum eros nisi, eu sagit-tis nisl feugiat quis."
    },
]

export let currentId = 4;

export function updateBlockList(newList: BlockModel[]) {
    blockList = newList;
}

export function updateCurrentId(newId: number) {
    currentId = newId;
}