console.log("Amit");
// or
console.log("Amit")
// and
console.log('Amit');
// or
console.log('Amit')
let Name = "Amit";
let Age = 25.00;
let radius = 10;
let x = null;
let y = undefined;
console.log(Name);
console.log(Age);
console.log(x);
console.log(y);

// Achhe programmer ki Sabje Khash baat Yahi Hoti Hai ki va subhi chijo ko organised ve main rakhta Hai taki vo meaningful rahe .

let Name1 = "Murli";
console.log(Name1);
let Age1 = 25.00;
let radius1 = 10;
let x1 = null;
let y1 = undefined;
console.log(Age1);
console.log(radius1);
console.log(x1); 
console.log(y1);
// we never use var keyword in our code because it is not a good practice to use var keyword in our code because it has some issues like hosting and scope issues. Instead, we use let and const keywords for variable declaration.

let Name2 = "Amit";
// let Name2 = "Murli"; 
// This will throw an error because we cannot reassign a value to a variable declared with let in the same scope.

const Age2 = 25.00;
// const Age2 = 30.00; 
// This will throw an error because we cannot reassign a value to a variable declared with const in the same scope.

const student = {
    fullName : "Amit Kumar",
    age : 20,
    CGPA : 9.5,
    isPassed : true,   
};
console.log(student.fullName);
console.log(student['fullName']); 


