// header

let header1 = document.createElement("header");

let m1 = document.createElement("ul");
let mli = document.createElement("li");
let lg = document.createElement("div");
let txtlogo = document.createTextNode("Elzero");
let txtfooter = document.createTextNode("Copyright 2022");
let prd = document.createTextNode("Product");

header1.className = "website-head";
header1.style = "display: flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items: center";

lg.className = "logo";
lg.style = "font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;";
lg.appendChild(txtlogo);

m1.className = "menu";
m1.style = "padding: 0px; margin: 0px; display: flex; list-style: none;"

document.body.appendChild(header1);
header1.appendChild(lg);
header1.appendChild(m1);
m1.appendChild(mli);


// body


 // div : content <- products <- span(num)
let cnt = document.createElement("div");
cnt.className = "content";
cnt.style = "display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;";


let p;
let sp;

for (let i = 1; i < 16; i++){
    let num = document.createTextNode(`${i}`);
    p = document.createElement("div");
    p.className = "product";
    p.style = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px;";
    

    sp = document.createElement("span");
    sp.style = "font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;";
    sp.appendChild(num);

    p.appendChild(sp);
    p.appendChild(prd.cloneNode(true));

    cnt.appendChild(p);

    
}

document.body.appendChild(cnt);

document.body.style = "background-color: lightgrey";

// footer


let footer1 = document.createElement("footer");

footer1.className = "footer";
footer1.style = "background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);";
footer1.appendChild(txtfooter);

document.body.appendChild(footer1);