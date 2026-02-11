// Check if a Number is Prime

// function isPrime(num) {
//   if (num <= 1) return false;

//   for (let i = Math.floor(num / 2); i >= 2; i--) {
//     if (num % i === 0) return false;
//   }

//   return true;
// }

// console.log(isPrime(49));

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2 || num === 3) return true;
//   if (num % 2 === 0) return false;

//   let digit = [];

//   for (let i = 1; i <= Math.sqrt(num); i++) {
//     if (num % i == 0) {
//       let partner = num / i;
//       digit.push(i);
//       if (!digit.includes(partner)) digit.push(partner);
//     }
//   }

//   return digit.length === 2;
// }

// console.log(isPrime(18));

// *****************************************************************************************************************

// Check if two numbers are Co-prime

// function isCoPrime(num1, num2) {
//   let dividend = num1 > num2 ? num1 : num2;
//   let divisor = num1 < num2 ? num1 : num2;

//   while (dividend % divisor !== 0) {
//     let remainder = dividend % divisor;
//     dividend = divisor;
//     divisor = remainder;
//   }

//   return divisor === 1;
// }

// console.log(isCoPrime(7, 81));

// *****************************************************************************************************************

// Print Fibonacci Series Upto N

function fibonacci(num) {
  let digit = [0, 1];

  for (let i = 2; i < num; i++) {
    digit.push(digit[i - 1] + digit[i - 2]);
  }

  return digit;
}

console.log(fibonacci(10));
