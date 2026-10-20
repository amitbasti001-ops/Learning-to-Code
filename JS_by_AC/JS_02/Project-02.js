//practiceQ1
enterNumber = prompt("hello!, Enter a Number :");
console.log("The enterNumber is : ", enterNumber);
if (enterNumber % 5 === 0) {
  console.log("The enterNumber is multiple of 5");
} else {
  console.log("The enterNumber is not multiple of 5");
}

alert("Hey!");

//practiceQ2
let num = prompt("hello!, Enter yout mark(0-100) :");
console.log("The Enter mark is : ", num);
if(90 <= num && num <= 100) {
  console.log("Your grade is A because your number is ", num);
} else if(70 <= num && num <= 89) {
  console.log("Your grade is B because your number is ", num);
} else if(60 <= num && num <= 69) {
  console.log("Your grade is C because your number is ", num);
} else if(50 <= num && num <= 59) {
  console.log("Your grade is D because your number is ", num);
} else if(49 <= num && num <= 0) {
  console.log("Your grade is F because your number is ", num);
}
