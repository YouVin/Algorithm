const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
const seminars = input.slice(1);

const rooms = {
  "Algorithm": "204",
  "DataAnalysis": "207",
  "ArtificialIntelligence": "302",
  "CyberSecurity": "B101",
  "Network": "303",
  "Startup": "501",
  "TestStrategy": "105"
};

for (let i = 0; i < N; i++) {
  console.log(rooms[seminars[i]]);
}
