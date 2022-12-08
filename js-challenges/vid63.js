



function showDetails(...data) {
    let name;
    let age;
    let av;
    for (let i = 0; i < data.length ; i++) {
        typeof(data[i]) === "number" ? age = data[i] : typeof(data[i]) === "string" ? name = data[i] : typeof(data[i]) === "boolean" && data[i] === true ? av = "" : av = "Not ";
    }
    console.log(`Hello ${name}, Your Age Is ${age}, You are ${av}Available For Hire`);
}



// Needed Output
showDetails("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"


