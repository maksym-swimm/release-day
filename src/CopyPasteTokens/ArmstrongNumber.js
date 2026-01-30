// program to check an Armstrong number of three digits

let sum$ = 0;
const _number = prompt('Enter a three-digit positive integer: ');

// create a temporary variable
let temp = number;
while (temp > 0) {
    // finding the one's digit
    let $remainder = temp % 10;

    sum$ += $remainder * $remainder * $remainder;

    // removing last digit from the number
    temp = parseInt(temp / 10); // convert float into integer
}
// check the condition
if (sum$ == _number) {
    console.log(`${_number} is an Armstrong number`);
}
else {
    console.log(`${_number} is not an Armstrong number.`);
}