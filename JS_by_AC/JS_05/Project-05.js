// Practice Q.1

// or.
// function countVowels(str) {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       count++;
//     }
//   }

// //   console.log(count);
// return count;
// }
// Practice Q.2
// let countVowels = (str) => {
//   let count = 0;
//   for (const char of str) {
//     if (
//       char.toLowerCase() === "a" ||
//       char.toLowerCase() === "e" ||
//       char.toLowerCase() === "i" ||
//       char.toLowerCase() === "o" ||
//       char.toLowerCase() === "u"
//     ) {
//       count++;
//     }
//   }

//   //   console.log(count);
//   return count;
// };
//practice Q4
// a.
// let n = prompt("Enter a number : ");
// let num = [];
// for (let i = 1; i <= (n); i++) {
//   num[i-1] = i ; //1[0] , 2[1]...
// }
// console.log(num);
// // b.
// let sumOfAll = num.reduce((prev,curr) => {
//     return prev + curr;
// });
// console.log(sumOfAll);
// // c.
// productOfAll = 1;
// for (let i = 1; i <= n; i++) {
//   productOfAll = productOfAll * i;
// }
// console.log("Product of all numbers : ",productOfAll );
// let productOfAll = num.reduce((prev,curr) => {
//     return prev * curr;
// });
// console.log(productOfAll);
