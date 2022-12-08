/*
    Higher Order Functions Challenge 

You Can Use
    - ,
    - _
    - Space
    - True => 1 => One Time Only in the code

You Cannot Use
    - Numbers
    - Letters

    - You must use [filter + map + reduce + your knowledge]
    - order is not important
    - all in one chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

let solution = myString.split(",").filter(function(ele) {
    return isNaN(+ele);
}).map(function (ele) {
    return ele === '_' ? ele = ' ': ele;
}).reduce(function (acc, current) { 
    return `${acc}${current}`;
})
solution = solution.replace(solution.charAt((+true)),'')

solution = solution.replace(solution.charAt(solution.length - (+true)),'')

console.log(solution); // Elzero Web School


/*
.map(function (ele) {
    return 
})
*/

