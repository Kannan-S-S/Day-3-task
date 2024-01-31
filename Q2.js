//a.Print odd numbers in an array
//Arrow function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const oddNumbers = numbers.filter(number => number % 2 !== 0);

console.log("Odd Numbers:", oddNumbers);

//b.Convert all the strings to title caps in a string array
//Arrow function:
const stringArray = ["hello world", "goodbye moon", "javascript is fun"];

const titleCapsArray = stringArray.map(str =>
  str.replace(/\b\w/g, char => char.toUpperCase())
);

console.log(titleCapsArray);

//c.Sum of all numbers in an array
//Arrow function:
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, current) => total + current, 0);

console.log("Sum of numbers:", sum);

//d.Return all the prime numbers in an array
//Arrow function:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isPrime = num => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumbers = numbers.filter(num => isPrime(num));

console.log("Prime Numbers:", primeNumbers);

//e.Return all the palindromes in an array
//Arrow function:
const words = ["level", "hello", "racecar", "noon", "world"];

const palindromes = words.filter(word => {
    const reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
});

console.log("Palindromes:", palindromes);
