const path = require('path');
const { fork } = require('child_process');

(async () => {

    const child = fork(path.resolve(__dirname, 'fork.js'), [], {
        execArgv: [
            '--inspect=9339'
        ]
    });

    let counter = 1;

    while (true) {
        console.log(`main ${counter}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        counter++;
    }

})();
