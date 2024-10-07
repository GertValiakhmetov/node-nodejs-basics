import path from "node:path";
import {rename as fsRename} from "node:fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const rename = async () => {
    const sourceName = path.join(import.meta.dirname, "files/wrongFilename.txt")
    const targetName = path.join(import.meta.dirname, "files/properFilename.md")

    try {
        await fsRename(sourceName, targetName)
    } catch (e) {
        throw new FsOperationFail()
    }
};

await rename();