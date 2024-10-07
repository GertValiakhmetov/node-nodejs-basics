import {promisify} from "node:util"
import {createGzip} from "node:zlib"
import {createReadStream, createWriteStream} from "node:fs"
import {pipeline} from "node:stream"
import path from "node:path";

const pipe = promisify(pipeline);

const compress = async () => {
    const sourcePath = path.join(import.meta.dirname, "files/fileToCompress.txt")
    const destinationPath = path.join(import.meta.dirname, "files/archive.gz")

    const source = createReadStream(sourcePath)
    const destination = createWriteStream(destinationPath)

    const gzip = createGzip()

    await pipe(source, gzip, destination)
};

await compress();