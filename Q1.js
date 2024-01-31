//a.Print odd numbers in an array
//Anonymous function:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function(number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

//IIFE 

(function() {
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.log("Odd numbers:");

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
})();

//b.Convert all the strings to title caps in a string array
//Anonymous function:
var stringsArray = ["hello", "world", "javascript", "example"];

var titleCapsArray = stringsArray.map(function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
});

console.log(titleCapsArray);

//IIFE:
(function() {
    var strings = ["hello world", "javascript is awesome", "title caps example"];

    for (var i = 0; i < strings.length; i++) {
        strings[i] = strings[i].toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
            return firstLetter.toUpperCase();
        });
    }

    console.log(strings);
})();

//c.Sum of all numbers in an array
//Anonymous function:
var numbers = [1, 2, 3, 4, 5];

var sum = function(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log("Sum of numbers:", sum(numbers));

//IIFE:
(function() {
    var numbers = [1, 2, 3, 4, 5];

    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    console.log("The sum of all numbers:", sum);
})();

//d.Return all the prime numbers in an array
//Anonymous function:
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
    var primes = [];

    for (var i = 0; i < arr.length; i++) {
        var isPrime = true;
        if (arr[i] === 1) {
            isPrime = false;
        } else {
            for (var j = 2; j <= Math.sqrt(arr[i]); j++) {
                if (arr[i] % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }
        if (isPrime) {
            primes.push(arr[i]);
        }
    }

    return primes;
})(numbers);

console.log("Prime numbers in the array:", primeNumbers);

//IIFE:
(function() {
    var numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    var primeNumbers = [];

    for (var i = 0; i < numbers.length; i++) {
        if (isPrime(numbers[i])) {
            primeNumbers.push(numbers[i]);
        }
    }

    console.log("Prime numbers:", primeNumbers);
})();

//e.Return all palindromes in an array
//Anonymous function:
(function() {
    var words = ["level", "hello", "radar", "noon", "world"];

    var palindromes = words.filter(function(word) {
        return word === word.split('').reverse().join('');
    });

    console.log("Palindromes:", palindromes);
})();

//IIFE:
(function() {
    var strings = ["level", "hello", "radar", "world", "madam"];

    function isPalindrome(str) {
        // Convert the string to lowercase and remove non-alphanumeric characters
        var cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        // Check if the clean string is equal to its reverse
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    var palindromes = [];

    for (var i = 0; i < strings.length; i++) {
        if (isPalindrome(strings[i])) {
            palindromes.push(strings[i]);
        }
    }

    console.log("Palindromes:", palindromes);
})();

//f.Return median of two sorted arrays of the same size.
//Anonymous function:
var findMedianSortedArrays = function(nums1, nums2) {
    var mergedArray = nums1.concat(nums2);
    mergedArray.sort(function(a, b) {
        return a - b;
    });

    var length = mergedArray.length;
    var mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

// Example usage:
var nums1 = [1, 3, 5];
var nums2 = [2, 4, 6];

console.log("Median:", findMedianSortedArrays(nums1, nums2));

//IIFE:
(function() {
    var arr1 = [1, 3, 5];
    var arr2 = [2, 4, 6];

    function findMedianSortedArrays(nums1, nums2) {
        var merged = nums1.concat(nums2).sort((a, b) => a - b);
        var len = merged.length;
        
        if (len % 2 === 0) {
            return (merged[len / 2 - 1] + merged[len / 2]) / 2;
        } else {
            return merged[Math.floor(len / 2)];
        }
    }

    var median = findMedianSortedArrays(arr1, arr2);
    console.log("Median:", median);
})();

//g.Remove duplicates from an array
//Anonymous function:
var array = [1, 2, 2, 3, 4, 4, 5, 5, 6];

var uniqueArray = function(arr) {
    return arr.filter(function(item, index) {
        return arr.indexOf(item) === index;
    });
}(array);

console.log(uniqueArray);

//IIFE:
(function() {
    var array = [1, 2, 3, 4, 2, 3, 5, 6, 1];

    var uniqueArray = Array.from(new Set(array));

    console.log("Array with duplicates removed:", uniqueArray);
})();

//h.Rotate an array by k times
//Anonymous function:
var rotateArray = function(array, k) {
    
    var rotations = k % array.length;

    for (var i = 0; i < rotations; i++) {
    
        var lastElement = array.pop();
        array.unshift(lastElement);
    }

    return array;
};

//EX
var myArray = [1, 2, 3, 4, 5];
var k = 2;
console.log("Original array:", myArray);
console.log("Array rotated by", k, "times:", rotateArray(myArray, k));

//IIFE:
(function() {
    var array = [1, 2, 3, 4, 5];
    var k = 2;

    function rotateArray(arr, k) {
        var len = arr.length;
        k = k % len; 

        reverseArray(arr, 0, len - 1);
        reverseArray(arr, 0, k - 1);
    
        reverseArray(arr, k, len - 1);

        return arr;
    }

    function reverseArray(arr, start, end) {
        while (start < end) {
            var temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    var rotatedArray = rotateArray(array, k);
    console.log("Rotated array:", rotatedArray);
})();




    