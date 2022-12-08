/*
  String Challenge
  All solutions must be in one chain
  You can use concatenate
*/

let a = "Elzero Web School";

//-Include This Methods In Your Solution [slice, -charAt]
console.log(a.charAt(2).toUpperCase() + (a.slice(3, 6))); // Zero

// 8 H
console.log((a.charAt(13)).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(a.slice(0, 7));-//-[Elzero]

// Use-Only-“substr” Method -+-Template-Literals In Your-Solution
console.log(a.substr(0, 7) + a.substr(-6)); //Elzero School

// Solution Must be dynamic and string may change
console.log((a.charAt(0)).toLowerCase() + (a.slice(1)).toUpperCase()); // eLZERO WEB SCHOOL