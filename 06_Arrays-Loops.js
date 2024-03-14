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
