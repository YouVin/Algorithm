for (let n = 10; n <= 99; n++) {
  const a = Math.floor(n / 10); 
  const b = n % 10;             

  if (a === 8 || b === 8) continue;        
  if ((a + b) % 6 !== 0) continue;        
  const rev = parseInt(String(n).split('').reverse().join(''), 10); 
  if (rev % 4 !== 0) continue;            

  console.log(n);
  break;
}
