import {cpus} from "node:os"
import {Worker} from "node:worker_threads"
import path from "node:path";

const performCalculations = async () => {
    const workerFile = path.join(import.meta.dirname, "worker.js")
    const cCount = cpus().length;
    const promises = [];

    Array.from({length: cCount}, (_, idx) => {
        promises.push(new Promise((resolve, reject) => {
            const onMessage = (data) => {
                resolve({...data, id: idx})
            }

            const onError = () => {
                reject({
                    data: null,
                    status: 'error'
                })
            }

            const worker = new Worker(workerFile)
            worker.on('message', onMessage)
            worker.on('error', onError)

            worker.postMessage({
                command: 'process',
                data: idx + 10
            })
        }))
    })

    const result = await Promise.allSettled(promises)

    console.log(result.map(promise => promise.value))
};

await performCalculations();