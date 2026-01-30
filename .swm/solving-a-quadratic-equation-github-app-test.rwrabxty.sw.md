---
title: Solving a quadratic equation (GitHub app test)
---
# Introduction

This document will walk you through the implementation of solving quadratic equations.

The purpose of this implementation is to provide a simple program that calculates the roots of a quadratic equation based on user input.

We will cover:

1. How user input is handled.
2. How the discriminant is calculated and used to determine the nature of the roots.
3. How the results are displayed based on the nature of the roots.

# Handling user input

<SwmSnippet path="src/GitHubApp/QuadraticEquation.js" line="1">

---

We start by taking input from the user for the coefficients of the quadratic equation.

```
// program to solve quadratic equation
let root1, root2;

// take input from the user
let a = prompt("Enter the first number: ");
let b = prompt("Enter the second number: ");
let c = prompt("Enter the third number: ");
```

---

</SwmSnippet>

# Calculating the discriminant

<SwmSnippet path="src/GitHubApp/QuadraticEquation.js" line="9">

---

Next, we calculate the discriminant, which helps in determining the nature of the roots (real and different, real and equal, or complex).

```
// calculate discriminant
let discriminant = b * b - 4 * a * c;

// condition for real and different roots
if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
```

---

</SwmSnippet>

# Displaying results for real and different roots

<SwmSnippet path="src/GitHubApp/QuadraticEquation.js" line="17">

---

If the discriminant is greater than zero, the roots are real and different. We calculate and display them accordingly.

```
    // result
    console.log(`The roots of quadratic equation are ${root1} and ${root2}`);
}
```

---

</SwmSnippet>

# Displaying results for real and equal roots

# Displaying results for complex roots

This concludes the walkthrough of the implementation for solving quadratic equations in the GitHub app tests. Each section of the code is designed to handle specific cases for the roots of the equation and display the results to the user.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBUmVsZWFzZURheVJlcG8lM0ElM0Fzd2ltbWlv" repo-name="ReleaseDayRepo"><sup>Powered by [Swimm](https://staging.swimm.cloud/)</sup></SwmMeta>
