import { blockList, updateBlockList } from "$lib/api";

export async function del({ params }) {
    updateBlockList(blockList.filter(block => block.id !== +params.id));
    return {
        status: 200,
    }
}