import path from "node:path";
import {writeFile} from "node:fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const create = async () => {
    const data = "I am fresh and young";
    const filePath = path.join(import.meta.dirname, "files/fresh.txt")

    try {
        await writeFile(filePath, data, {flag: 'wx'})
    } catch (e) {
        throw new FsOperationFail()
    }
};

await create();