const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let t = +input[0];
let i = 1;

for (let k = 1; k <= t; k++) {
  let good = input[i++]*1 + input[i++]*2 + input[i++]*3 + input[i++]*3 + input[i++]*4 + input[i++]*10;
  let evil = input[i++]*1 + input[i++]*2 + input[i++]*2 + input[i++]*2 + input[i++]*3 + input[i++]*5 + input[i++]*10;

  let result = "Battle " + k + ": ";

  if (good > evil) result += "Good triumphs over Evil";
  else if (good < evil) result += "Evil eradicates all trace of Good";
  else result += "No victor on this battle field";

  console.log(result);
}
