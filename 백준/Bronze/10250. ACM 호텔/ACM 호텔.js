const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  const [H, W, N] = input[i].split(' ').map(Number);

  let floor = N % H; 
  let room = Math.floor(N / H) + 1;

  if (floor === 0) {
    floor = H;
    room = N / H;
  }

  const roomNumber = `${floor}${room < 10 ? '0' + room : room}`;
  console.log(roomNumber);
}
