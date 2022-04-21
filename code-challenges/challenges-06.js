'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  
const arr = [12, 32, 22, 45, 78, 12, 50];
const findMax = (arr) => {
    let max = 0;
    for(let i = 0; i < arr.length; i++){
       const el = arr[i]; if( el >= max ){
          max = el;
       };
    };
    return max;
 }
 console.log(findMax(arr));
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  
const arry = [12, 32, 22, 45, 78, 12, 50];
const sumNums = (arry) => {
    let sum = 0;
    for(let i = 0; i < arry.length; i++){
       const el = arry[i]; if( typeof el === "number"){
          sum += +el;
       };
    };
    return sum;
 }
 console.log(sumNums(arry));
 
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};