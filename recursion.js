// do these recursively, alright?

// factorial(n) - return factorial n, i.e. n * n - 1 * n - 2 ...  * 1
// written out as n!
// factorial(5) -> 120  (5 * 4 * 3 * 2 * 1)
// factorial(6) -> 720  (6 * 5 * 4 * 3 * 2 * 1)
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1);
    }
}
// console.log(factorial(5))

// fibonacci(n)
// return the nth number in the Fibonacci sequence
// https://en.wikipedia.org/wiki/Fibonacci_number
// fibonacci(0) -> 0
// fibonacci(1) -> 1
// fibonacci(2) -> 1
// fibonacci(3) -> 2
// fibonacci(4) -> 3
// fibonacci(5) -> 5
// fibonacci(6) -> 8
// keep n less than like, 30

function fibonacci(n) {
    
    if (n == 0 || n == 1) {
        // console.log(`calling fibonacci(${n})`)
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);

}

// memoization
function fibonacci_m(n, results = {}) {
    console.log(`calling fibonacci(${n})`)
    if (n == 0 || n == 1) {
        
        return n;
    }

    if (results[n] != undefined) {
        console.log(`fibonacci(${n}) already calculated with a result of ${results[n]}`)
        return results[n];
    }

    result = fibonacci_m(n - 1, results) + fibonacci_m(n - 2, results)
    results[n] = result;
    return result;

}
console.log(fibonacci_m(7));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
