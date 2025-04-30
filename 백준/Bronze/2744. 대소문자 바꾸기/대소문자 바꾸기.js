const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

let result = "";

for (let i = 0; i < input.length; i++) {
  const char = input[i];
  // 소문자면 대문자로
  if (char >= 'a' && char <= 'z') {
    result += char.toUpperCase();
  }
  // 대문자면 소문자로
  else if (char >= 'A' && char <= 'Z') {
    result += char.toLowerCase();
  }
}

console.log(result);
