const fs = require("fs");
const input = fs.readFileSync(0).toString().trim(); 

const result = Array(26).fill(-1); 

for (let i = 0; i < input.length; i++) {
  const charCode = input.charCodeAt(i) - 97; 
  if (result[charCode] === -1) {
    result[charCode] = i;  
  }
}

console.log(result.join(" "));
