//print the following pattern
//1
//2 2
//3 3 3
//4 4 4 4
let n = 4;

for (let i = 0; i < n + 1; i++) {
  let h = i;
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += h;
  }
  console.log(row);
}
