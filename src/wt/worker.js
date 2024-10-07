import {parentPort} from "node:worker_threads"

// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = (data) => {
    try {
        const result = nthFibonacci(data)
        parentPort.postMessage({
            data: result,
            status: 'resolved'
        })
    } catch (e) {
        parentPort.postMessage({
            data: null,
            status: 'error'
        })
    }
};

parentPort.on('message', (data) => {
    if (data.command === "process") {
        sendResult(data.data)
    }
})

