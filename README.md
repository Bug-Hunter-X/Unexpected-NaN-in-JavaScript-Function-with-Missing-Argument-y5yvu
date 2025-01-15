# Unexpected NaN in JavaScript Function with Missing Argument

This repository demonstrates a common, yet subtle, bug in JavaScript related to function arguments and the addition operator. When a function expects two arguments, and only one is provided, the addition operation results in NaN (Not a Number) instead of throwing an error.

## Bug Description
The `foo` function is designed to add two numbers. However, if only one argument is passed, it produces NaN because JavaScript attempts to add a number to `undefined`. This behavior is unexpected by some programmers and can lead to difficult-to-debug issues.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript interpreter (like Node.js).
3. Observe the unexpected NaN output when the function is called with only one argument.

## Solution
The `bugSolution.js` file provides a corrected version of the function, which uses the nullish coalescing operator (`??`) to provide a default value of 0 if an argument is missing.  This prevents unexpected behavior. 

## License
This project is licensed under the MIT License - see the LICENSE file for details.