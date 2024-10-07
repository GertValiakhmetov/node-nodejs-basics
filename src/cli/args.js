const parseArgs = () => {
    const args = process.argv.slice(2)

    for (let i = 0; i < args.length; i++) {
        if (!args[i].startsWith("--")) {
            console.log(`${args[i - 1].replace("--", "")} is ${args[i]}`)
        }
    }
};

parseArgs();