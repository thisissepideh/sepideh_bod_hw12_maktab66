function timeoutPromiseResolve(interval) {

    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve("successful");
        }, interval);
    });
};

function timeoutPromiseReject(interval) {

    return new Promise((resolve, reject) => {

        setTimeout(function() {
            reject("error");
        }, interval);

    });

};

function timeTest() {

    timeoutPromiseResolve(5000)
        .then(e => {
            return timeoutPromiseReject(2000)
        })
        .then(e => {
            return timeoutPromiseResolve(3000)
        })
        .catch(e => {
            console.log(e);
            let finishTime = Date.now();
            let timeTaken = finishTime - startTime;
            alert("Time taken in milliseconds: " + timeTaken);
        });
}

let startTime = Date.now();

timeTest();