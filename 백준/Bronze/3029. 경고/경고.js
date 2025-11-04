const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [h1, m1, s1] = input[0].split(":").map(Number);
const [h2, m2, s2] = input[1].split(":").map(Number);

const current = h1 * 3600 + m1 * 60 + s1;
let target = h2 * 3600 + m2 * 60 + s2;

if (target <= current) target += 24 * 3600;

let diff = target - current;

const hour = Math.floor(diff / 3600);
diff %= 3600;
const minute = Math.floor(diff / 60);
const second = diff % 60;

const pad = (x) => String(x).padStart(2, "0");

console.log(`${pad(hour)}:${pad(minute)}:${pad(second)}`);
