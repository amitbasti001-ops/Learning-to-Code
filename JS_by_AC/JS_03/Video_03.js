// for(let i=1;i<=5000;i++){
// console.log("Apna college");  //5000 times  
// console.log("sum = ", sum);
// console.log("loop has ended");

// //
// for(let i = 1; i <= 5; i++) {
//     console.log("i = ",i);
// }
// console.log(i); // this is not exicuted because of let is block function
// for(var i = 1; i <= 5; i++) {
//     console.log("i = ",i);
// }
// console.log(i); // this is not exicuted because of var is global function

// Infinite loop kabhi nahi karna hai

// while loop
// let i = 1
// while(i <= 10) {
//     console.log(" i = ", i);
//     i++;
// }
// Do while loop
// let i = 1
// do{
//     console.log(" i = ", i);
//     i++;
// } while(i <= 10);
// do while me while(); lagana mat bhoolna 

// for of loop
// let str = "Apnacollege"
// let size =0;
// for(let val of str) { // iterator -> character(i)
//     console.log("val = ", val);
//     size++;
// }
// console.log("String size = ", size);

// let student = {
//     name : "Rahul Kumar",
//     age : 20,
//     cgpa : 7.5,
//     isPass : true
// }; // ; Dont forget this 
// for(let value in student) {
//     console.log(value);
// } 
// for(let key in student) {
//     console.log("key = ",key,  "   value = ",student[key]);
// }

// let str = "Apna College" // or 'apna college'
// console.log(str.length);
// console.log(str[0],str[1]);

// Template Literals
// let specialString = `This is a template literal `;
// console.log(specialString);
// console.log(typeof(specialString));
// console.log(typeof specialString );

// let obj = {
//     item : "Pen",
//     price : 10,
// };
// console.log("The cost of", obj.item, " is ", obj.price," rupees");
// let output = `The cost of ${obj.item} is ${obj.price} rupees`; // with ${obj.price}  is sring 
// let output = `The cost of ${obj.item} is  obj.price  rupees`; // only obj.price is number 
// console.log(output);
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

// let str = "Apna\nCollege";  //12   -> \n count 1 character
// console.log(str.length);
// let str = "Apna College";
// console.log(str.toUpperCase());

// java script or original string is immutable String
// let str = " Apna College ";
// console.log(str.toLowerCase());

// console.log(str.trim()); // remove whitesppaces from end and front only 
// console.log(str.slice());  // full string
// console.log(str.slice(1));  // 1 or after to 1
// console.log(str.slice(1,4));  // from 1 to 4 index but index four is not included.
// console.log(str.slice());
// let str = "hellololo";
// console.log(str.replace("lo","p")); // only one time matching replace helplolo
// console.log(str.replaceAll("lo","p")); // all matching value replace help
// let str = "IloveJS";
// console.log(str.charAt(3));  //v

