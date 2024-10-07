import path from "node:path";
import {cp} from "node:fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const copy = async () => {
    const sourceDir = path.join(import.meta.dirname, "files")
    const targetDir = path.join(import.meta.dirname, "files_copy")

    try {
        await cp(sourceDir, targetDir, {recursive: true, errorOnExist: true, force: false})
    } catch (e) {
        throw new FsOperationFail()
    }
};

await copy();
