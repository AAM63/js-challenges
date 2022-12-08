/*
    Arrays Challenge
*/

let zero = 0;

let counter = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here



my.reverse().splice(zero, counter, "Osama");

console.log(my.slice(zero, counter + counter/counter));// ["Osama", "Elham", “Mazero”, "Ahmed" ]

console.log(my.slice(zero + counter/counter, counter)); // ["Elham", "Mazero”]

console.log(my.slice(zero + counter/counter, counter)[zero].slice(zero,--counter) + my.slice(zero + counter/counter, ++counter)[++zero].slice(++zero,counter+counter)); // “Elzero”

// console.log(zero);
// console.log(counter);



console.log(my.slice(--zero + counter/counter, counter)[--zero].slice(++counter,++counter) + my.slice(++zero + counter/counter, counter)[--zero].slice(counter,++counter).toUpperCase()); // "rO"

// console.log(zero);
// console.log(counter);