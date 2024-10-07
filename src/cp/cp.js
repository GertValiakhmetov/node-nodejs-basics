import {fork} from "node:child_process"
import path from "node:path";

const spawnChildProcess = async (args) => {
    const sourceFile = path.join(import.meta.dirname, "files/script.js")

    const cp = fork(sourceFile, ["arg1", "arg2"])
    cp.on("message", (data) => console.log(data + "\n"))

    cp.send('Something')
    cp.send('CLOSE')
};

// Put your arguments in function call to test this functionality
spawnChildProcess( /* [someArgument1, someArgument2, ...] */);
