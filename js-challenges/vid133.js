/*
Map and Set : Challenge

Requirements
    *you can't use numbers or true or false
    * don't use array indexes
    * you can't use loop
    * you can't use any higher order function
    * only one line solution inside console
    * if you use length => then only one time 

Hints
    * you can use * operator only in calculation
    set
    * spread operator
    *math object methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10]; 



// let setn1 = new Set(n1);

// y = setn1.size;

// setn1.delete(20); //20
// setn1.delete(30); //30

// x = Array.from(setn1);

// n3 = [...n1, ...n2];

// console.log(setn1);

console.log([...n1, ...n2].length * new Set(n1).size * Math.min(...n2)); // 210  