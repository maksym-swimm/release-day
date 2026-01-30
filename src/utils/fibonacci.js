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

function main() {
    const fib = fibonacci();
    for (let i = 0; i < 10; i++) {
        console.log(fib());
    }
}
