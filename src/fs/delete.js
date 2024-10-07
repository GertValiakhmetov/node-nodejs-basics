import path from "node:path";
import {rm} from "fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const remove = async () => {
   const sourceName = path.join(import.meta.dirname, "files/fileToRemove.txt")

    try {
        await rm(sourceName)
    } catch (e) {
        throw new FsOperationFail()
    }
};

await remove();