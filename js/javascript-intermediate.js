// Exerc-01 ---------------------------------- //
// Sum All Numbers in a Range
// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first. For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
  let sum = 0;
  let first = 0;
  let last = 0;

  // Find witch one is higher
  // could use "let max = Math.max(arr[0], arr[1]);"
  // or just "let max = Math.max(...arr)"
  if (arr[0] <= arr[1]) {
    first = arr[0];
    last = arr[1];
  } else {
    first = arr[1];
    last = arr[0];
  }

  for (first; first <= last; first++) {
    sum += first;
  }
  return sum;
}

sumAll([1, 4]);

// Same result using Arithmetic Progression
function sumAll2(arr) {
  const sumAll = (arr) => {
    const startNum = arr[0];
    const endNum = arr[1];
    // Get the count of numbers between the two numbers by subtracting them and add 1 to the absolute value.
    // ex. There are |1-4| + 1 = 4, (1, 2, 3, 4), 4 numbers between 1 and 4.
    const numCount = Math.abs(startNum - endNum) + 1;
    // Using Arithmetic Progression summing formula
    const sum = ((startNum + endNum) * numCount) / 2;
    return sum;
  };
}

// Recursive Solution
function sumAll3([first, last]) {
  const step = first - last < 0 ? 1 : -1;
  //console.log ("Step: " + step + " First: " + first + " Last: " + last)
  return first !== last ? first + sumAll([first + step, last]) : first;
}

// Exerc-02 ---------------------------------- //
// Difference between Two Arrays
// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
function diffArray(arr1, arr2) {
  let newArr = [];
  arr1.forEach((elem) => {
    if (arr2.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  });
  arr2.forEach((elem) => {
    if (arr1.indexOf(elem) === -1) {
      newArr.push(elem);
    }
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// Similiar version with inner function.
function diffArray(arr1, arr2) {
  return [...diff(arr1, arr2), ...diff(arr2, arr1)];

  function diff(a, b) {
    return a.filter((item) => b.indexOf(item) === -1);
  }
}

// Another approach
// Using:
//- array.concat(array2) - merge second array at the end of the first array making it one only.
//- array.includes(elem) - return true or false if the given elem is present in the array
//- array.filter(function()) - return every element if it is included given a validation function.
function diffArray(arr1, arr2) {
  let newArr = [];
  newArr = arr1
    .concat(arr2)
    .filter((elem) => !arr1.includes(elem) || !arr2.includes(elem));
  return newArr;
}

// Exerc-03 ---------------------------------- //
// Seek and Destroy
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.
function destroyer(arr, ...toRemove) {
  let newArr = arr;

  for (let i = 0; i < toRemove.length; i++) {
    newArr = newArr.filter((elem) => {
      return elem !== toRemove[i];
    });
  }
  //console.log(newArr);
  return newArr;
}
destroyer([1, 2, 3, 1, 2, 3], 2, 3, 5);

// another way without the for
function destroyer(arr, ...toRemove) {
  let newArr = arr;
  newArr = arr.filter((elem) => {
    return !toRemove.includes(elem);
  });
  return newArr;
}

// even more consize ES6 syntax to declare function using arrow functions.
const destroyer = (arr, ...valsToRemove) =>
  arr.filter((elem) => !valsToRemove.includes(elem));

// another solution using /slice, arguments keyword and call/apply function.
// arguments is an Array-like object that contains the values of the arguments
function destroyer(arr) {
  let args = Array.prototype.slice.call(arguments);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < args.length; j++) {
      if (arr[i] === args[j]) {
        delete arr[i];
      }
    }
  }
  return arr.filter(Boolean);
}

// One last solution using Array.from, arguments and slice.
// The Array.from(arrayLike) method creates a new, shallow-copied Array instance from an array-like or iterable object.
// Array.from can have a second parameter to create an expression Ex.: console.log(Array.from([1, 2, 3], x => x + x)); Output: Array [2, 4, 6]
function destroyer(arr) {
  let args = Array.from(arguments).slice(1);
  return arr.filter(function (val) {
    return !args.includes(val);
  });
}

// Exerc-04 ---------------------------------- //
// Wherefore art thouPassed
// Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

function whatIsInAName(collection, source) {
  let sourceProp = Object.getOwnPropertyNames(source);

  return collection.filter((elem) => {
    //console.log(" ");
    //console.log(elem);
    for (let i = 0; i < sourceProp.length; i++) {
      //console.log("i: " + i);
      //console.log(sourceProp[i] + " source: " + source[sourceProp[i]]);
      //console.log(sourceProp[i] + " collec: " + elem[sourceProp[i]]);
      if (source[sourceProp[i]] !== elem[sourceProp[i]]) {
        //console.log("Negado");
        return false;
      }
    }
    //console.log("Aceito");
    return true;
  });
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2, cookie: 2 }
);

//Another solution using every and another way of saying getOwnPropertyNames (keys).
function whatIsInAName(collection, source) {
  return collection.filter((obj) => {
    return Object.keys(source).every((key) => {
      return obj[key] === source[key];
    });
  });
}

// Exerc-05 ---------------------------------- //
// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
//--- String split and join, split for separting the original string and join to unify em after.
//--- regex
// \s matchis whitespaece
// | or
// _ matches underscore _.
// (?= )  Positive look ahead without including it
// [] match character in the set
// A-Z matchs range A to Z (code 65 to 90).
function spinalCase(str) {
  let arrayAux = str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
  return arrayAux;
}
spinalCase("This Is Spinal Tap");
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");

// Exerc-06 ---------------------------------- //
// Pig Latin
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
  let auxStr = str.split("");

  // Regex to find what is the last consonant before the first vowel, doesnt work when vowel is at the beggining of the word.
  let lastConsBeforeVowel = /[a-z](?=[a,e,i,o,u])/i;

  // indexOf(param) indexOf does not accept regular expressions as paramenters, search does.
  // save the index that goes to the end.
  let toEndIndex = str.search(lastConsBeforeVowel);

  //Case the word begins with vowel
  if (str[0].match(/[a,e,i,o,u]/i)) {
    auxStr.push("way");
    auxStr = auxStr.join("");
  }

  //If it begins with consonant
  else {
    for (let i = 0; i <= toEndIndex; i++) {
      auxStr.push(auxStr[i]);
    }
    for (let i = 0; i <= toEndIndex; i++) {
      auxStr.shift();
    }
    auxStr.push("ay");
    auxStr = auxStr.join("");
  }

  return auxStr;
}

translatePigLatin("eight"); // eightway
translatePigLatin("schwartz"); //artzschway
translatePigLatin("glove"); //oveglay

// another way using groups of RegEx and Replace
//--- str.replace(regexp|substr, newSubstr|function)
function translatePigLatin(str) {
  return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// Exerc-07 ---------------------------------- //
// Search and Replace
// Perform a search and replace on the sentence using the arguments provided and return the new sentence. First argument is the sentence to perform the search and replace on. Second argument is the word that you will be replacing (before). Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
  let strAux = str.split(" ");
  let indexOfSearch = strAux.indexOf(before);

  // put the after keyword always in lower case before using it.
  after = after.toLowerCase();

  //check if the word to be replaced was found.
  if (indexOfSearch != -1) {
    //check if the first letter of the word is capitalized
    if (strAux[indexOfSearch][0].match(/[A-Z]/)) {
      strAux[indexOfSearch] = after;
      let wordSearched = strAux[indexOfSearch].split("");
      wordSearched[0] = wordSearched[0].toUpperCase();
      wordSearched = wordSearched.join("");
      strAux[indexOfSearch] = wordSearched;
    } else {
      strAux[indexOfSearch] = after;
    }
  }

  strAux = strAux.join(" ");
  return strAux;
}

myReplace("Let us go to the store", "store", "mall");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
// should return "He is Sitting on the couch"

// Aditional solution using slice(1) and charAt(0)
function myReplace(str, before, after) {
  // Find index where before is on string
  let index = str.indexOf(before);
  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.
    after = after.charAt(0).toUpperCase() + after.slice(1);
  } else {
    // Change the after word to be uncapitalized before we use it.
    after = after.charAt(0).toLowerCase() + after.slice(1);
  }
  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

// Another Solution using substring and replace
function myReplace(str, before, after) {
  // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
  if (/^[A-Z]/.test(before)) {
    after = after[0].toUpperCase() + after.substring(1);
  } else {
    after = after[0].toLowerCase() + after.substring(1);
  }

  // return string with argument "before" replaced by argument "after" (with correct case)
  return str.replace(before, after);
}

// Exerc-08 ---------------------------------- //
// DNA Pairing
// Base pairs are a pair of AT and CG. Match the missing element to the provided character. Return the provided character as the first element in each array. For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//--- switch case js and array.forEach()

function pairElement(str) {
  let strArray = str.split("");
  let dnaResult = [];

  strArray.forEach((elem) => {
    //Can use IFs but its not the best way.
    switch (elem) {
      case "A":
        dnaResult.push(["A", "T"]);
        break;
      case "T":
        dnaResult.push(["T", "A"]);
        break;
      case "C":
        dnaResult.push(["C", "G"]);
        break;
      case "G":
        dnaResult.push(["G", "C"]);
        break;
      default:
      //console.log("Not an DNA element");
    }
  });
  return dnaResult;
}

pairElement("GCG");
pairElement("ATCGA");

//--- another solution using map and objects
function pairElement(str) {
  //create object for pair lookup
  let pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  let arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

//--- one more solution with for and switch case
function pairElement(str) {
  // Return each strand as an array of two elements, the original and the pair.
  let paired = [];

  // Function to check with strand to pair.
  let search = function (char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  // Loops through the input and pair.
  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

// Exerc-09 ---------------------------------- //
// Missing letters
// Find the missing letter in the passed letter range and return it. If all letters are present in the range, return undefined.
//--- variable.charCodeAt(index) : 0 is default for index, return the Number "code" for the string found.
//--- String.fromCharCode(100) : return the string for the code passed as argument.
//--- using array.map()
function fearNotLetter(str) {
  let strArray = str.split("");
  let missingLetter = undefined;

  strArray = strArray.map((elem) => {
    return elem.charCodeAt();
  });

  let aux = 0;
  for (let i = strArray[0]; i < strArray[strArray.length - 1]; i++) {
    if (i !== strArray[aux]) {
      missingLetter = String.fromCharCode(i);
      break;
    }
    aux++;
  }
  return missingLetter;
}

fearNotLetter("abce");

// other solution
function fearNotLetter(str) {
  for (let i = 0; i < str.length; i++) {
    /* code of current character */
    let code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// another map solution without for
// Adding this solution for the sake of avoiding using 'for' and 'while' loops.
// See the explanation for reference as to why. It's worth the effort.

function fearNotLetter(str) {
  let compare = str.charCodeAt(0),
    missing;

  str.split("").map(function (letter, index) {
    //As we map through our letters’ character codes, we go comparing with the one that should be in that position.
    //If the current letter matches, we move the comparison variable to its next position so we can compare on the next cycle.
    if (str.charCodeAt(index) == compare) {
      ++compare;
    }
    //If not, the missing letter will be assigned to the missing variable, which will be returned after the map is finished.
    else {
      missing = String.fromCharCode(compare);
    }
  });

  return missing;
}
// you could do even shorter with 1 for and 1 if and a return line.
// or even in a more complicated way using RegExp

// Exerc-10 ---------------------------------- //
// Sorted UnionPassed
// Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.
//--- array.toString() to transform all the array and subarrays into a string.

function uniteUnique(...arr) {
  // converting the paramenters in one only array using toString to transform em in one string them spliting the elements separated by , and them transform all the itens back on numbers with map +x.
  let arrAux = arr
    .toString()
    .split(",")
    .map((x) => +x);

  let arrResult = [];

  arrAux.forEach((elem) => {
    //check if eleme exists on the arrResult
    if (arrResult.indexOf(elem) === -1) {
      arrResult.push(elem);
    }
  });

  //console.log(arrAux);
  //console.log(arrResult);
  return arrResult;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); //should return [1, 3, 2, 5, 4

// another solution using double fors to iterate on the 2 layers array
function uniteUnique(arr) {
  let args = [...arguments];
  let result = [];
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      if (!result.includes(args[i][j])) {
        result.push(args[i][j]);
      }
    }
  }
  return result;
}

// another solution using ES6 with concat and ...new Set
function uniteUnique(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regulat set and not a multiset
  return [...new Set(flatArray)];
}

// Exerc-11 ---------------------------------- //
// Convert HTML Entities
// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
function convertHTML(str) {
  let strArray = str.split("");
  let resultArray = [];

  // you can also use For to do this.
  strArray.forEach((elem) => {
    switch (elem) {
      case "&":
        resultArray.push("&amp;");
        break;
      case "<":
        resultArray.push("&lt;");
        break;
      case ">":
        resultArray.push("&gt;");
        break;
      case '"':
        resultArray.push("&quot;");
        break;
      case "'":
        resultArray.push("&apos;");
        break;
      default:
        resultArray.push(elem);
    }
  });

  return resultArray.join("");
}

convertHTML("Dolce & Gabbana");

// another way using regx and str.replace
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, (match) => htmlEntities[match]);
}

// Exerc-12 ---------------------------------- //
// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
function sumFibs(num) {
  if (num === 1) {
    return 1;
  }

  let sum = 1;
  let last = 1;
  let current = 1;
  let aux = 0;
  // watch for not using a for i < num. or it will return big numbers.
  while (current <= num) {
    aux = current;
    current = current + last;
    last = aux;

    if (aux % 2 === 1) {
      sum += aux;
    }
  }
  return sum;
}
sumFibs(4);

// another way of writting similar logic
function sumFibs(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }

    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }
  return result;
}

// Exerc-13 ---------------------------------- //
// Sum All Primes
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
function sumPrimes(num) {
  let sum = 0;
  let current = 2;

  // loop through the numbers checkings if each one is prime or not and adding to the sum variable if prime.
  while (current <= num) {
    if (isPrime(current)) {
      sum += current;
    }
    current++;
  }
  return sum;
}
// function to check if a number is prime, return true or false.
function isPrime(x) {
  for (let i = x - 1; i > 1; i--) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

sumPrimes(10);
// there are a ton of other ways to solve this in much more efficient ways, check Sieve of Eratosthenes wikipedia for example. It is possible with reduce, with recursion and so on.

// Exerc-14 ---------------------------------- //
// Smallest Common Multiple
//--- uses array.every.
function smallestCommons(arr) {
  let minMultipleFound = false;
  let minMultiple = 0;
  let completeArray = [];

  // transform the argument into a full array with the intermediate itens
  for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
    completeArray.push(i);
  }

  // while the smallest common multiple is not found keep looking
  while (minMultipleFound === false) {
    minMultiple++;
    // if to check if all elements are divisible by minMultiple
    if (completeArray.every((elem) => isDivisble(minMultiple, elem))) {
      minMultipleFound = true;
    }
  }
  // this part can be written like this:
  // while(!(completeArray.every(elem => isDivisble(minMultiple, elem)))) { minMultiple++;} //and minMultiple starts in 1;

  return minMultiple;
}

function isDivisble(num, divisor) {
  if (num % divisor === 0) {
    return true;
  } else {
    return false;
  }
}

smallestCommons([1, 5]);
smallestCommons([2, 10]); //should return 2520.

// can be done using euclidian algorithm
// can be done by the primes
// 30 = 2 × 3 × 5
// 45 = 3 × 3 × 5
// 56 = 2 x 2 x 2 x 7
// lcm([30, 45, 56]) = 2 x 2 x 2 x 3 x 3 x 5 x 7 = 2520

// Exerc-15 ---------------------------------- //
// Drop it
// using array find, indexOf and slice.

function dropElements(arr, func) {
  //find the index where the array will be cut off.
  //use slice(index)

  let elementValue = arr.find((elem) => func(elem));
  let indexToCut = arr.indexOf(elementValue);
  let resultArray = arr.slice(indexToCut);

  if (elementValue === undefined) {
    return [];
  } else {
    return resultArray;
  }
}

dropElements([1, 2, 3], function (n) {
  return n <= 2;
});
dropElements([0, 1, 0, 1], function (n) {
  return n === 1;
});
dropElements([1, 2, 3, 7, 4], function (n) {
  return n > 3;
}); //should return [7, 4].
dropElements([1, 2, 3, 4], function (n) {
  return n > 5;
}); //should return [].

// can be done using shift 01
function dropElements(arr, func) {
  let times = arr.length;
  for (let i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }
  return arr;
}

// another shift solution
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// can be done using ES6 findIndex function and a ternary if.
function dropElements(arr, func) {
  return arr.slice(arr.findIndex(func) >= 0 ? arr.findIndex(func) : arr.length);
}

// even recursion
function dropElements(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? dropElements(arr.slice(i + 1), func, i)
    : arr;
}

// Exerc-16 ---------------------------------- //
// SteamrollerPassed
// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
  let flatArray = [].concat(...arr);

  //check if there is a element of the type array, to repeat concat in that case.
  while (flatArray.some((elem) => Array.isArray(elem))) {
    flatArray = [].concat(...flatArray);
  }

  //console.log (flatArray);
  return flatArray;
}

steamrollArray([[["a"]], [["b"]]]); //should return ["a", "b"].
steamrollArray([1, [2], [3, [[4]]]]); //should return [1, 2, 3, 4].
steamrollArray([1, [], [3, [[4]]]]); //should return [1, 3, 4].
steamrollArray([1, {}, [3, [[4]]]]); //should return [1, {}, 3, 4].
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

// Solution using .flat would be like this:
function steamrollArray(arr) {
  return arr.flat(Infinity);
}

// another solution without .flat but with recursion.
function steamrollArray(arr) {
  let flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

// one more similar recursive solution
function steamrollArray(val, flatArr = []) {
  val.forEach((item) => {
    if (Array.isArray(item)) steamrollArray(item, flatArr);
    else flatArr.push(item);
  });
  return flatArr;
}

// Exerc-17 ---------------------------------- //
// Binary Agents
// Return an English translated sentence of the passed binary string. The binary string will be space separated.

function binaryAgent(str) {
  // split the original array where there is space.
  let strSplited = str.split(" ");
  // make a copy with map transforming binary into integers.
  let strDecimal = strSplited.map((elem) => parseInt(elem, 2));
  // transform the decimal array of numbers into the string.
  let result = String.fromCharCode(...strDecimal);

  //console.log(result);
  return result;
}

binaryAgent(
  "01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"
);

// same solution with only one line
function binaryAgent(str) {
  return String.fromCharCode(
    ...str.split(" ").map((char) => parseInt(char, 2))
  );
}
// curiosity: ES6 supports binary numeric literals for integers  with the prefix 0b or 0B.
//var binary = 0b1101000; // code for 104
//console.log(binary); // prints 104

// Exerc-18 ---------------------------------- //
// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument). In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.
function truthCheck(collection, pre) {
  return collection.every((elem) => !!elem[pre]); //!! is not necessary I used to make it clear Bolean. could use Boolean(value) too;
}

truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy", sex: "male" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
); //should return true
truthCheck(
  [
    { user: "Tinky-Winky", sex: "male" },
    { user: "Dipsy" },
    { user: "Laa-Laa", sex: "female" },
    { user: "Po", sex: "female" },
  ],
  "sex"
); //should return false.

// Exerc-19 ---------------------------------- //
// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

function addTogether() {
  // if there is only 1 argument and both are numbers
  if (arguments[1] == null && isANumber(arguments[0])) {
    // saving the first parameter to be acessed on the second call.
    let aux = arguments[0];
    return (secondCall) => {
      // testing if second call of the function has a number as parameter.
      if (isANumber(secondCall)) {
        return aux + secondCall;
      }
    };
  }

  // if there are 2 arguments and both are numbers
  else if (
    arguments[1] != null &&
    isANumber(arguments[0]) &&
    isANumber(arguments[1])
  ) {
    return arguments[0] + arguments[1];
  }
}

// verify if the parameter is a strictly a number;
function isANumber(test) {
  if (typeof test === "number") {
    return true;
  } else {
    return false;
  }
}

addTogether(2)([3]); // should return undefined.
addTogether(5)(7); // should return 12.
addTogether(2, 3); // should return 5.

// another solution, consize to write but no so clear to read.
function addTogether(first, second) {
  if (typeof first !== "number") {
    return undefined;
  }
  const sum = (second) =>
    typeof second === "number" ? first + second : undefined;
  return typeof second === "undefined" ? (second) => sum(second) : sum(second);
}

// Exerc-20 ---------------------------------- //
// Make a Person
// Fill in the object constructor with the following methods: getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

let Person = function (firstAndLast) {
  let completeName = firstAndLast;

  //example function given by the exercise, not using ES6
  this.getFullName = function () {
    return completeName;
  };

  this.getFirstName = () => {
    return completeName.split(" ")[0];
  };

  this.getLastName = () => {
    return completeName.split(" ")[1];
  };

  this.setFirstName = (first) => {
    completeName = first + " " + completeName.split(" ")[1];
  };

  this.setLastName = (last) => {
    completeName = completeName.split(" ")[0] + " " + last;
  };

  this.setFullName = (fullName) => {
    completeName = fullName;
  };
};

let bob = new Person("Bob Ross");
bob.getFullName(); // should return "Bob Ross".
// bob.getLastName() should return "Ross".
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").

// Exerc-21 ---------------------------------- //
// Map the Debris
// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
//--- several Math usage and adding object to array.
function orbitalPeriod(arr) {
  let GM = 398600.4418;
  let earthRadius = 6367.4447;
  let orbitalArray = [];

  arr.forEach((elem) => {
    orbitalArray.push({
      name: elem.name,
      orbitalPeriod: Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(earthRadius + elem.avgAlt, 3) / GM)
      ),
    });
  });
  //console.log(orbitalArray);
  return orbitalArray;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
// orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]) should return [{name : "iss", orbitalPeriod: 5557}, {name: "hubble", orbitalPeriod: 5734}, {name: "moon", orbitalPeriod: 2377399}].

// some solution can be done changing the original array, with mutation, but I dont recomend it;
