import { blockList } from "$lib/api";

export async function get() {
    return {
        body: { blockList },
        headers: {
            accept: "application/json",
        }
    }
}