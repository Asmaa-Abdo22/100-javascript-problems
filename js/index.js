//* 100 probelm in javascript

//& 1- even and odd
// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return `${number} is Even `;
//   } else {
//     console.log();
//     return `${number} is Odd `;
//   }
// }
// console.log(evenOrOdd(3))

//& 2- Sum of positive
// function positiveSum(arr) {
//   return arr.reduce((sum, num) => (num > 0 ? (sum += num) : sum), 0);
// }
// console.log(positiveSum([1, -4, 7, 12]));

//& 3- Sum without highest and lowest number
// function sumArray(array) {
//   if (!Array.isArray(array) || array.length < 2) return 0;
//   let sortedArr = array.sort((a, b) => a - b);
//   let newArr = sortedArr.slice(1, -1);
//   return newArr.reduce((sum, item) => (sum += item), 0);
// }
// console.log(sumArray([1, 1, 11, 2, 3]));

//& 4-  String-repeat
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
  // Another Solution -> return s.repeat(n);
}
console.log(repeatStr(5, "Hello"));
