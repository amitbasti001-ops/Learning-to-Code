console.log("Hey");
// This is a single line comment
/* This is a multi line comment */
// Arithmetic Operators
// let a = 10;
// let b = 5;
console.log("a = ",a," & b = ",b)
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);
console.log("a^b = ",a**b);    //Exponentiation

//Unary Operators
let c = 10;
console.log("c = ",c);
console.log("++c = ",++c); //Pre Increment
console.log("c++ = ",c++); //Post Increment
console.log("c = ",c);
console.log("--c = ",--c);
console.log("--c = ",--c); //Pre Decrement
console.log("c-- = ",c--); //Post Decrement
console.log("c = ",c);

//Assignment Operators
console.log("c = ",c);
c += 5; // c = c + 5
console.log("c += ",c += 5);
console.log("c = ",c);
c -= 5; // c = c - 5
console.log("c -= ",c -= 5);
console.log("c = ",c);
c *= 5; // c = c * 5
console.log("c *= ",c *= 5);
console.log("c = ",c);
c **= 5; // c = c ** 5
console.log("c **= ",c **= 5);
console.log("c = ",c);
c /= 5; // c = c / 5
console.log("c /= ",c /= 5);
console.log("c = ",c);
c %= 5; // c = c % 5
console.log("c %= ",c %= 5);
console.log("c = ",c);

// Comparison Operators
// let a = 10; // a is number
// let b = "5"; // b is string
console.log("a = ",a," & b = ",b)
console.log("a == b : ",a == b);
console.log("a != b : ",a != b);
console.log("a > b : ",a > b);
console.log("a >= b : ",a >= b);
console.log("a <= b : ",a <= b);
console.log("a != b : ",a != b);

// === // ye pahle data type check karega fir value check karega and you can say it is strict eqaulity operator */

console.log("a === b : ",a === b);
console.log("a !== b : ",a !== b);

// Logical Operators
let a = 10;
let b = 5;
let cond1 = a > b;   //true
let cond2 = a === 10;   //true
console.log("a = ",a," & b = ",b);
console.log("cond1 && cond2 : ",cond1 &&  cond2 );
console.log("cond1 || cond2 : ",cond1 ||  cond2 );

// let age = 25;
if(age>=18)
{
    console.log("You are eligible to vote");
}
else
{
    console.log("You are not eligible to vote");
}

let num = 10;
if(num%2 ===0)
{
    console.log(num, "is an even number");
}
else
{
    console.log(num, "is an odd number");
}
syntax === rules

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else if(mode === "blue") {
  color = "blue";
} else if(mode === "green") {
  color = "green";
} else {
  color = "white";
}
console.log("color =" , color);

if (mode === "dark") console.log("color = black");

// Ternary Operator is different way of writing if else statement in single line
// condition ? true : false 
let age = 25;
let result = age >=18 ? "adult" : "not adult";
console.log("result = ",result);

// MDN docs you can refer to any thing in html,css,and java script
const action = "say_hello";
switch (action) {
  case "say_hello": {
    const message = "hello";
    console.log(message);
    break;
  }
  case "say_hi": {
    const message = "hi";
    console.log(message);
    break;
  }
  default: {
    console.log("Empty action received.");
  }
}