// memoization
// js object, keys will be arg to fn, value will be the return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n - 1, memo) + fib(n -2);
    return memo[n];
};

// const bar = (n) => {
//     if (n <= 1) return;
//     bar(n -2); // O(n) time, O(n) space
// }

// const dib = (n) => {
//     if (n <= 1) return;
//     dib(n - 1);
//     dib(n -1);
// }

// const lib = (n) => {
//     if (n <= 1) return;
//     lib(n - 2);
//     lib(n - 2);
// }


console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));
