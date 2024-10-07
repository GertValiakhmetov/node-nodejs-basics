import path from "node:path";
import {readdir} from "fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const list = async () => {
 const sourceName = path.join(import.meta.dirname, "files")

    try {
        const files = await readdir(sourceName, {withFileTypes: true});
        files.forEach((file) => {
            console.log(file.name)
        })
    } catch (e) {
        throw new FsOperationFail()
    }
};

await list();