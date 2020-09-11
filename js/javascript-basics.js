// Use an Array to Store a Collection of Data
// We have defined a variable called yourArray. Complete the statement by assigning an array of at least 5 elements in length to the yourArray variable. Your array should contain at least one string, one number, and one boolean.
let yourArray = [1, "two", true, 4, 5];

// Access an Array's Contents Using Bracket Notation
// In order to complete this challenge, set the 2nd position (index 1) of myArray to anything you want, besides "b".
let myArray = ["a", "b", "c", "d"];
myArray[1] = "test";
//console.log(myArray);

// Add Items to an Array with push() and unshift()
// We have defined a function, mixedNumbers, which we are passing an array as an argument. Modify the function by using push() and unshift() to add 'I', 2, 'three' to the beginning of the array and 7, 'VIII', 9 to the end so that the returned array contains representations of the numbers 1-9 in order.
//--- unshift - Add elements at the beggining of the array.
//--- push - Add elements at the end of the array.
function mixedNumbers(arr) {
  arr.unshift("I", 2, "three");
  arr.push(7, "VIII", 9);
  return arr;
}
mixedNumbers(["IV", 5, "six"]);

// Remove Items from an Array with pop() and shift()
// We have defined a function, popShift, which takes an array as an argument and returns a new array. Modify the function, using pop() and shift(), to remove the first and last elements of the argument array, and assign the removed elements to their corresponding variables, so that the returned array contains their values.
//--- shift - Remove element at the beggining of the array
//--- pop - Remove element at the end of the array
function popShift(arr) {
  let popped = arr.pop();
  let shifted = arr.shift();
  return [shifted, popped];
}

// Remove Items Using splice()
// We've initialized an array arr. Use splice() to remove elements from arr, so that it only contains elements that sum to the value of 10.
//--- array.splice(A, B) - Remove and modify the called array, remove B amount of elements starting from the A index.
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
arr.splice(4, 4);
arr.splice(0, 1);
//console.log(arr);

// Add Items Using splice()
// We have defined a function, htmlColorNames, which takes an array of HTML colors as an argument. Modify the function using splice() to remove the first two elements of the array and add 'DarkSalmon' and 'BlanchedAlmond' in their respective places.
//--- array.splice(startIndex, amountToDelete, item1, item2 and so on) - Item1, item2 and so on will be added on the main array replacing whats been removed or where the index used is.
function htmlColorNames(arr) {
  const startIndex = 2;
  const amountToDelete = 0;
  arr.splice(startIndex, amountToDelete, "DarkSalmon", "BlanchedAlmond");
  return arr;
}

// Copy Array Items Using slice()
// We have defined a function, forecast, that takes an array as an argument. Modify the function using slice() to extract information from the argument array and return a new array that contains the elements 'warm' and 'sunny'.
//--- array.slice() - dont modify original array, make a copy. 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction. (not including the last element)
function forecast(arr) {
  return arr.slice(2, 4);
}
forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"]);

// Copy an Array with the Spread Operator
// We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments. The function is supposed to return a new array made up of num copies of arr. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
//--- spread operator ...arr - does not change original array, put elements separated for each element on the arr used.
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.push([...arr]);
    num--;
  }
  return newArr;
}
copyMachine([true, false, true], 2);

// Combine Arrays with the Spread Operator
// We have defined a function spreadOut that returns the variable sentence. Modify the function using the spread operator so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
//--- another spread operator usage.
function spreadOut() {
  let fragment = ["to", "code"];
  let sentence = ["learning", ...fragment, "is", "fun"];
  return sentence;
}
spreadOut();

// Check For The Presence of an Element With indexOf
// indexOf() can be incredibly useful for quickly checking for the presence of an element on an array. We have defined a function, quickCheck, that takes an array and an element as arguments. Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.
//--- indexOf('banana') - parameter is an element to be looked into the array. returns -1 if elements doesnt exist and index if exisits.
//--- !! can be used to return a boolean value. ! negates and !! get back to original value but now as boolean.
function quickCheck(arr, elem) {
  return !!(arr.indexOf(elem) + 1);
}
quickCheck(["squash", "onions", "shallots"], "mushrooms");

// Iterate Through All an Array's Items Using For Loops
// We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.
function filteredArray(arr, elem) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].indexOf(elem));
    if (arr[i].indexOf(elem) === -1) {
      newArr.push([...arr[i]]);
    }
  }
  return newArr;
}
filteredArray(
  [
    [3, 2, 3],
    [19, 3, 9],
  ],
  3
);

// Create complex multi-dimensional arrays
// We have defined a variable, myNestedArray, set equal to an array. Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements, so that it has exactly five levels of depth (remember, the outer-most array is level 1). Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper', and on the fifth level, include the string 'deepest'.
let myNestedArray = [
  "unshift",
  false,
  1,
  2,
  3,
  "complex",
  "nested",
  [
    "loop",
    "shift",
    6,
    7,
    1000,
    "method",
    [
      "concat",
      false,
      true,
      "spread",
      "array",
      "deep",
      [
        "mutate",
        1327.98,
        "splice",
        "slice",
        "push",
        "deeper",
        ["iterate", 1.3849, 7, "8.4876", "arbitrary", "depth", "deepest"],
      ],
    ],
  ],
];

// Add Key-Value Pairs to JavaScript Objects
// A foods object has been created with three entries. Using the syntax of your choice, add three more entries to it: bananas with a value of 13, grapes with a value of 35, and strawberries with a value of 27.
//--- Add Attributes to Objects;
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
};
//method 1
foods["bananas"] = 13;
//method 2
foods.grapes = 35;
//method 3
const attribute = "strawberries";
foods[attribute] = 27;

// Modify an Object Nested Within an Object
// Here we've defined an object userActivity, which includes another object nested within it. Set the value of the online key to 45.
//--- Change nested attrib to objects
let userActivity = {
  id: 23894201352,
  date: "January 1, 2017",
  data: {
    totalUsers: 51,
    online: 42,
  },
};
userActivity.data.online = 45;

// Access Property Names with Bracket Notation
// We've defined a function, checkInventory, which receives a scanned item as an argument. Return the current value of the scannedItem key in the foods object. You can assume that only valid keys will be provided as an argument to checkInventory.
// Access attribute using Brakcet.
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
function checkInventory(scannedItem) {
  return foods[scannedItem];
}
checkInventory("apples");

// Use the delete Keyword to Remove Object Properties
// Use the delete keyword to remove the oranges, plums, and strawberries keys from the foods object.
// delete to remove attribute from objects
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};
delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

// Check if an Object has a Property
// We've created an object, users, with some users in it and a function isEveryoneHere, which we pass the users object to as an argument. Finish writing this function so that it returns true only if the users object contains all four names, Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.
// Method 2 uses every in a array to check if all are true.
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};
//Method 1
function isEveryoneHere(obj) {
  if (
    obj.hasOwnProperty("Alan") &&
    obj.hasOwnProperty("Jeff") &&
    obj.hasOwnProperty("Sarah") &&
    obj.hasOwnProperty("Ryan")
  ) {
    return true;
  }
  return false;
}
//Method 2
function isEveryoneHere(obj) {
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    obj.hasOwnProperty(name)
  );
}
isEveryoneHere(users);
