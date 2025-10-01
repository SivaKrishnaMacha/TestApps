function factorial(n) {
    if (n < 0) throw new Error('Negative numbers not allowed');
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Example usage:
// console.log(factorial(5)); // Output: 120