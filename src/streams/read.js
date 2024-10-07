import {createReadStream} from "node:fs";
import path from "node:path";

const read = async () => {
    const sourceFile = path.join(import.meta.dirname, "files/fileToRead.txt")

    const readStream = createReadStream(sourceFile);

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk)
    })
};

await read();