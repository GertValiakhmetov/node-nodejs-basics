import {createWriteStream} from "node:fs";
import path from "node:path";

const write = async () => {
    const sourceFile = path.join(import.meta.dirname, "files/fileToWrite.txt")

    const writeStream = createWriteStream(sourceFile);

    process.stdin.on('data', (chunk) => {
        writeStream.write(chunk)
    })


};

await write();