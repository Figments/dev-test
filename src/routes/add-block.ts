import { blockList, currentId, updateBlockList, updateCurrentId } from "$lib/api";
import type { BlockModel, BlockForm } from "$lib/models";

export async function post({ request }) {
    const data: BlockForm = await request.json();
    const newBlock: BlockModel = {
        id: currentId + 1,
        header: data.header,
        body: data.body,
    }
    updateBlockList([...blockList, newBlock]);
    updateCurrentId(currentId + 1);
    return {
        status: 200,
    }
}