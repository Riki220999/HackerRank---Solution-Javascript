/**
 Author : Riki Setiyo Pambudi
 solve Mini-max Sum by Javascript
 */

// Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers.Then print the respective minimum and maximum values as a single line of two space - separated long integers.

/**
 * For example, arr = [1,3,5,7,9].Our minimum sum is.
 * 1 + 3 + 5 + 7 = 16 <--- Minimum --->
 * and our maximum sum is.
 * 3 + 5 + 7 + 9 = 24 <--- Maximum --->
 * We would print
 */

"use strict";

const processData = input => {
  // jangan lupa Split Dulu Setelah itu baru di Looping
  const numbers = input.split(" ").map(i => parseInt(i));
  numbers.sort((a, b) => a - b);
  let minSum = 0;
  let maxSum = 0;
  for (let i = 0; i < numbers.length - 1; i++) {
    minSum += numbers[i];
    maxSum += numbers[i + 1];
  }
  console.log(minSum + " " + maxSum);
};
process.stdin.resume();
process.stdin.setEncoding("ascii");

let _input = "";

process.stdin.on("data", input => (_input += input));
process.stdin.on("end", () => processData(_input));
