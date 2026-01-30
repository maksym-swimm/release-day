---
title: add fibonacci
---
# Introduction

This document explains the implementation of a Fibonacci sequence generator in the codebase. It covers:

1. How the Fibonacci sequence is generated using closures.
2. Why the generator returns a function instead of a direct sequence.
3. How the generator is used to produce and output Fibonacci numbers.

# generating Fibonacci numbers with closures

The Fibonacci sequence is implemented as a function that returns another function. This inner function, when called repeatedly, produces the next number in the sequence. The outer function initializes two variables representing the last two numbers in the sequence and updates them on each call.

<SwmSnippet path="src/utils/fibonacci.js" line="1">

---

This approach encapsulates the sequence state within the closure, avoiding global variables or external state management. It also allows multiple independent Fibonacci generators to coexist without interfering with each other.

```
// fibonacci is a function that returns
// a function that returns an int.
function fibonacci() {
  let a = 0;
  let b = 1;
  return function() {
    let temp = a;
    a = b;
    b = temp + b;
    return a;
  };
}
```

---

</SwmSnippet>

# using the generator to output Fibonacci numbers

The main function demonstrates how to use the Fibonacci generator. It creates an instance of the generator function and calls it 10 times in a loop, logging each Fibonacci number to the console.

<SwmSnippet path="src/utils/fibonacci.js" line="14">

---

This usage pattern shows the generator's purpose: to produce a stream of Fibonacci numbers on demand, rather than computing the entire sequence upfront.

```
function main() {
    const fib = fibonacci();
    for (let i = 0; i < 10; i++) {
        console.log(fib());
    }
}
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBUmVsZWFzZURheVJlcG8lM0ElM0Fzd2ltbWlv" repo-name="ReleaseDayRepo"><sup>Powered by [Swimm](https://staging.swimm.cloud/)</sup></SwmMeta>
