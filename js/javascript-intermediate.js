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
  var args = Array.prototype.slice.call(arguments);
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < args.length; j++) {
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
  var args = Array.from(arguments).slice(1);
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
  var index = str.indexOf(before);
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
