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
