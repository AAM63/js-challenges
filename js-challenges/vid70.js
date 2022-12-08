/*
    Function Arrow Challenge
*/

// 1- One Statement In Function
// 2- Convert To Arrow Function
// 3- Print The Output [Args may change]


// let names = function (...data) {
//     return `String [${data.join('], [')}] => Done !`;
// }

let names = (...data) => `String [${data.join('], [')}] => Done !`;


console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !



// ---------------------------------------------------- //


// 1- Replace ??? In return state to get the output
// 2- Create the same function with regular syntax
// 3- use array inside the args to get the output

let myNumbers = [20, 50, 10, 60];

// let calc = (one, two, ...nums) => nums[1] - one + nums[0] - two;


let calc = function (one, two, ...nums) {
    return nums[1] - one + nums[0] - two;
}

console.log(calc(10, 20, 50, 60)); //80 = 60 - 10 + 50 - 20