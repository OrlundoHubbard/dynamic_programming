const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n -2);
};

const bar = (n) => {
    if (n <= 1) return;
    bar(n -2); // O(n) time, O(n) space
}

const dib = (n) => {
    if (n <= 1) return;
    dib(n - 1);
    dib(n -1);
}

const lib = (n) => {
    if (n <= 1) return;
    lib(n - 2);
    lib(n - 2);
}


console.log(fib(2));
console.log(fib(3));
console.log(fib(50));
