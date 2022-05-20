function countPrimeNumbers() {
    let counter = 0;
    for (let i = 2; i <= 100; i++) {
        if (i % 2 != 0 && i % 3 != 0 && i % 5 != 0) {
            counter += 1;
        }
    }
    return counter;
}
const start_time = performance.now();
countPrimeNumbers();
const finish_time = performance.now();
const process_time = finish_time - start_time;
console.log(`Execution time of printing countPrimeNumbers was ${process_time} milliseconds.`);
