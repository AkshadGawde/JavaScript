const arr = [10, 20, 30];
console.log(arr);

console.log(arr[0]); //Displays value on index 0
console.log(arr[1]); //Displays value on index 1
console.log(arr[2]); //Displays value on index 2
console.log(arr.length); //Displays length of the array

//change the value of array
arr[0] = 99;
console.log(arr);

const myArr = [1, "hello", true, { name: "socks" }, [1, 3]];

console.log(myArr);
console.log(typeof myArr);
console.log(typeof [1, 3]);
console.log(Array.isArray([1, 2]));
console.log(myArr.length);

myArr.push(100);
console.log(myArr); //Add 100 to end of the array

myArr.splice(0, 1); //Removing 1st value of array form index 0
console.log(myArr);

//Loops
let i = 1;
while (i <= 5) {
  console.log(i);

  //   i = i + 1;
  i++;
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

let randomNumber = 0;
while (randomNumber < 0.5) {
  randomNumber = Math.randomNumber;
}

console.log(randomNumber);

// Example of an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Example of an array of strings
let fruits = ["Apple", "Banana", "Orange", "Mango"];

// Example of an array with mixed data types
let mixedArray = [1, "Hello", true, { key: "value" }];

// Example of a for loop to iterate over an array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// Example of a for loop to iterate over an array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// Example of a do-while loop to iterate over an array
let j = 0;
do {
  console.log(mixedArray[j]);
  j++;
} while (j < mixedArray.length);
