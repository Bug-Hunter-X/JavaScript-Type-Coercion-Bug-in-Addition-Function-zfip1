function foo(a, b) {
  // Use nullish coalescing operator to handle null or undefined
  const numA = a ?? 0; 
  const numB = b ?? 0; 

  // Convert inputs to numbers
  return Number(numA) + Number(numB);
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(0, 2)); // Output: 2
console.log(foo(1, 0)); // Output: 1
console.log(foo(0, 0)); // Output: 0