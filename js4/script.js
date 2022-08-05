'use strict'

// 1.

// let array = [5, 25, 89, 120, 36,];
// array.push('Javascript', 'Python');

// array.unshift('Html ','Css')                  


// array.shift();
// array.pop();

// console.log(array);

// console.log(array.length);

// 2.

// let array = ['orange', 'banana', 'peach'];
// array.push('apple', 'ananas');
// array.unshift('watermelon');

// console.log(array.length);

// array.splice(2,1, 'mango');

// console.log(array);

// array.shift();
// array.pop();

// console.log(array.length);
// console.log(array);

// 3.

// let array = [12, 25, 3, 6, 8, 14, 7, 23];

// let Division = array.map(x => x / 3)

// console.log(Division);

// 4.

// let array = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];

// let result = array.filter(function(item){
//     return typeof item == 'number'
// })
// console.log(result);


// 5.

// let languages = ['html', 'css', 'javascript', 'python', 'php'];

// let newarray = languages.filter(item => item.length > 3);

// console.log(newarray);
  

// 6.

// let array= ['academy ', 'of ', 'digital ', 'industries'].reduce(function(accumulator,currentvalue){
//     return accumulator + currentvalue;
// },
// ''
// )

// console.log(array);


// 7.

// let item = [12, 'google', 32, null,'yahoo', 25];

// let result = item.map(item =>{
//     if(typeof item == 'number'){
//         return item * item;
//     }
//     else if (typeof item == 'string'){
//         return item.toUpperCase();
//     }
//     return;
// })
// console.log(result);


// 8.


// let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];

// let result = words.filter(element => {
//     if(element.includes('m') || element.includes('M')){
//         return true;
//     }
// })
// console.log(result);



// 9.

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let NewValue = arr1.concat(arr2, arr3)
// console.log(NewValue);



// 10.

// let arr = [1, 2, 3, 4, 5];

// let sum = 0;
// arr.forEach(function(item){
//     sum += item
// })

// console.log(sum);



// 11.


// let numbers = [-2, 5, 10, -5, -1, 1, 3, 4, -15];

// let result = numbers.filter(item =>{
//     if(item > 0){
//         return true;
//     }
// })
// console.log(result);



// 12.

// let arr = [-1, -2, -3, 4];

// let result = arr.some(item =>{
//     if(item > 0){
//         return true;
//     }
//     return false;
// })
// console.log(result);



// 13.


// let arr = [[2, -3, 5, 11], [1, -30, -11, 100], [-1, -3, -4]].reduce(function(accumulator,currentValue){
//     return accumulator.concat(currentValue)
// },
// []
// )
// console.log(arr);


// let result = arr.filter(item =>{
//     if(item > 0){
//         return true;
//     }

// })

//  console.log(result);



// 14.


// let array =[23,45,32,5,87,7,3,98];

// let result = array.sort(function(x,y) {
//     return y-x;
// })

// console.log(result);

// console.log(result[array.length-1]);










