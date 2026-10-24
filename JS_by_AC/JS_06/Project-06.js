// Practice Q.1
// Wrong way
// let h1 = document.querySelector("h2");
// let h2 = h1.textContent
// console.log(h2 + " from Apna College students"); 
// corect way
// let h2 = document.querySelector("h2")
// console.log(h2.innerText);
// h2.innerText = h2.innerText + " from Apna College students";

// //Practice Q.2 
// let divs = document.querySelectorAll(".box")
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);
// divs[0].innerText = divs[0].innerText + " !";
// divs[1].innerText = divs[1].innerText + " #";
// divs[2].innerText = divs[2].innerText + " @";
// let idx = 1
// for(div of divs) {
    // console.log(div.innerText);
//     div.innerText = `Nwe Value of Div ! ${idx}`;
//     idx++;
// }