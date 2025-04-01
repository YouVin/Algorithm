const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");
const now = fileData[0].split(" ");

let h = parseInt(now[0]);
let m = parseInt(now[1]);

const cookingTime = Number(fileData[1]);
const totalMinutes = m + cookingTime;

h += Math.floor(totalMinutes / 60);
m = totalMinutes % 60; 

if (h >= 24) {
    h -= 24; 
}

console.log(`${h} ${m}`);

