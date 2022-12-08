/*
    Switch Challenge
*/

let job = "Manager";
let salary = 0;

if (job === "Manager") {
    salary = 8000;
} else if (job === "IT" || job === "Support") {
    salary = 6000;
} if (job === "Developer" || job === "Designer") {
    salary = 7000;
} else {
    salary = 4000;
}


switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary);
        break;
    case "IT":
    case "Support":
        salary = 8000;
        console.log(salary);
        break;
    case "Developer":
    case "Designer":
        salary = 8000;
        console.log(salary);
        break;
    default:
        salary = 4000;
        console.log(salary);
}