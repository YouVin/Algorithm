const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const parts = input.split(' ');

const up = parts[0];      
const down = parts[1];   
const goal = parts[2];    
const remain = goal - up;        
const perDay = up - down;        

const div = (remain + perDay - 1) / perDay; 
const days = div - (div % 1);      

const totalDays = days + 1;     

console.log(totalDays);
