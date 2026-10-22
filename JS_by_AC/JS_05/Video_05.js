// invoke = call karna
// function myFunction() {
//     console.log("Welcome to Apna College");
//     console.log("We are learning JS :) ");
// }
// myFunction();
// repeat(Redundency) lines then you can use function
// function muFunction(msg) {
//parameter  -> input in side  the definition
// console.log(msg);
// }
// Not a Number = NaN
// myfunction("I love JS");  // argument in side the call function

// Function -> 2 Numbers , sum
// function sum(x, y) {
//     console.log(x + y);
// }
// function sum(x, y) {
//     s = x + y;
//     console.log("Before return");
//     return s;
//     console.log("After return");

// }
// let val = sum(1233,2304);
// console.log(val);

// fun parameter -> like local variables of function -> block scope(within the function)

// => sign of arrow function
// Morden functions of JS for saml calculation
// const arrowSum = (a,b) => {
//     console.log(a + b);
// };
// const arrowMul = (a, b) => {
//     console.log(a * b);
// };
// arrowSum(4, 3);
// arrowMul(4, 3);
// const printHello = () => {
//     console.log("Hello");
// }
// or You can also write like this without curly
// const printHello = () => console.log("Hello");

// method and function
/* when we bind function through some condition then function become method 
like this 
[1 ,2 ,4 ,5 ,6].toUpperCase();
*/

// let arr = [1, 2, 4, 6, 8, 10];
// arr.forEach(function printVal(val) {
//   console.log(val);
// });
// or
// let arr = ["Pune", "Basti", "lucknow", "delhi"]
// arr.forEach((val, idx ,arr) => {
//     console.log(val.toUpperCase(), idx , arr);
// })

/* Higher order method/function
forEach,  kisi function ko parameter le rahe hote hai ya fir return kar rahe hote hain 
aur jaha bhi apko call back dikh jaye toh wah call back function  */
// Practice Q.3
// let arr = [2, 5, 7, 9, 44, 75, 34];
// arr.forEach((val) => {
//   console.log(val ** 2); //val*val
// });

// let arr = [2, 5, 7, 9, 44, 75, 34];

// let calcSqaure = (arr) => {
//   console.log(arr * arr);
// };
// arr.forEach(calcSqaure);

// when we are using map method generally we are not using idx and array
// let arr = [2, 5, 7, 9, 44, 75, 34];

// arr.map((val) => {
//     console.log(val);
// })
// let newArr = arr.map((val) => {
//     return val * 2;
//     // return val * val;
// })
// console.log(newArr);

/* forEach samll calculation or something we want to print 
// but map using the value of old array to create new array */

// let arr = [2, 5, 7, 9, 44, 75, 34];

// // arr.map((val) => {
// //     console.log(val);
// // })
// let newArr = arr.filter((val) => {
//   return val % 5 === 0;
//   // return val * val;
// });
// // let newArr = arr.map((val) => {
// //   return val % 5 === 0;
// //   // return val * val;
// // });
// console.log(newArr);

// const arr1 = [1, 2, 3, 4, 6, 7];

// const sum = arr1.reduce((result, val) => {//previous = result/res , val/curr = next
// //   return result + val;
//   return result > val ? result : val; // agar result val se bada hai toh (?) result nahi to (:) val print karo
// });
// console.log(sum);

// let markOfArr = [34, 90, 98, 99, 89, 88, 97, 96];
// let marksGRthan90 = markOfArr.filter((val) => {
//     // for(let i = 0;i < markOfArr.length ; i++ ) {
//     return val > 90 ;
//     // }
// })
// console.log(marksGRthan90)
