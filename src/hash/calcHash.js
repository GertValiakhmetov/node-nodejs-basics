import path from "node:path";
import {createHash} from "node:crypto";
import {createReadStream} from "node:fs";

const calculateHash = async () => {
    const sourceFile = path.join(import.meta.dirname, "files/fileToCalculateHashFor.txt")

    const hash = createHash('sha256');

    const readStream = createReadStream(sourceFile);

    readStream.on('data', (chunk) => {
        hash.update(chunk)
    })

    readStream.on('end', () => console.log(hash.digest('hex')))
};

await calculateHash();