/*
If-Challenge
*/

let a = 10;

if (a < 10){
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 to 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}


// Write With Ternary If: syntax

a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 to 40") : a > 40 ? console.log("> 40") : console.log("Unknown")




let st = "Elzero Web School";

if (((st.lastIndexOf("l") + 1) * 2).toString() === "34") {
    console.log("Good");
}

// W Position May Change

if ("????" === "W") {
    console.log("Good");
}

if (typeof(st).toString() === "string") {
    console.log("Good");
}

if ((typeof(st.length)).toString() === "number") {
    console.log("Good");
}

if ((st.slice(0, 6)).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}