/*
    Destructuring Challenge
*/

let chosen = 2;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["Html", "Css"]},
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"]},
    { title: "Sayed", age: 33, available: true, skills: ["Php", "Laravel"]},
];

let {title: t, age: ag, available: av, skills: [, sk]} = myFriends[chosen - 1];

if (av === true) {
    av = "Available"
} else {
    av = "Not Available"
}

console.log(t);
console.log(ag);
console.log(av);
console.log(sk);