/*
   Loop challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia"];

document.write('<div>We Have X Admins</div>');

let i = 0;
let j = 0;
let n = 0;
let x = 0;

for (; i<myAdmins.length; i++){

    if (myAdmins[i] === "Stop"){
        x = i;
        break;
    }
}
document.write(`<div>We Have ${x} Admins</div>`);
document.write(`<hr>`);

console.log(x);
console.log(i);
console.log(myAdmins[0][0]);

for (; j<x; j++){

    document.write(`<div>The Admin For Team ${j+1} Is ${myAdmins[j]}</div>`);
    document.write(`<h3>Team Members: </h3>`);
    for (let k = 0; k<myEmployees.length; k++){
        if (myAdmins[j][0] === myEmployees[k][0]){
            n++;
            document.write(`<p>- ${n} ${myEmployees[k]} </p>`)
        }
    }
    document.write(`<hr>`);
    n = 0;
    
}