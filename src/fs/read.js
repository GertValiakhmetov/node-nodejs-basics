import path from "node:path";
import {readFile} from "node:fs/promises";
import {FsOperationFail} from "../errors/errors.js";

const read = async () => {
    const sourceFile = path.join(import.meta.dirname, "files/fileToRead.txt")

    try {
        const content = await readFile(sourceFile, {encoding: "utf-8"})
        console.log(content)
    } catch (e) {
        throw new FsOperationFail()
    }
};

await read();