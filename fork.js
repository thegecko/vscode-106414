(async () => {

    let counter = 1;

    while (true) {
        console.log(`fork ${counter}`);
        await new Promise(resolve => setTimeout(resolve, 1000));
        counter++;
    }

})();
