const parseEnv = () => {
    const envs = process.env;

    for (const envKey of Object.keys(envs)) {
        if (envKey.startsWith("RSS_")) {
            console.log(`${envKey}=${envs[envKey]}`)
        }
    }
};

parseEnv();