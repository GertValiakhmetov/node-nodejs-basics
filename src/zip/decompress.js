import {promisify} from "node:util"
import {createGunzip} from "node:zlib"
import {createReadStream, createWriteStream} from "node:fs"
import {pipeline} from "node:stream"
import path from "node:path";

const pipe = promisify(pipeline);

const decompress = async () => {
    const sourcePath = path.join(import.meta.dirname, "files/archive.gz")
    const destinationPath = path.join(import.meta.dirname, "files/fileToCompress.txt")

    const source = createReadStream(sourcePath)
    const destination = createWriteStream(destinationPath)

    const gunzip = createGunzip()

    await pipe(source, gunzip, destination)
};

await decompress();