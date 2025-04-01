const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const dice1 = Number(fileData[0]);
const dice2 = Number(fileData[1]);
const dice3 = Number(fileData[2]);

let total = 0;
let maxNum = dice1;

if(dice1 == dice2 && dice2==dice3 && dice1 == dice3){
  total = 10000 + (dice1 * 1000)
  console.log(total);
} else if (dice1 == dice2 || dice1 == dice3 || dice2 == dice3){
  if(dice1 == dice2){
    total = 1000 + (dice1 * 100);
    console.log(total)
  }else{
    total = 1000 + (dice3 * 100);
    console.log(total)
  }
}else{
  if(maxNum < dice2){
    maxNum = dice2;
  }
  if(maxNum < dice3){
    maxNum = dice3;
  }
  total = maxNum * 100;
  console.log(total)
}