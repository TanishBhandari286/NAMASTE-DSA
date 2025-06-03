// print the following pattern
//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5
let n = 5;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += j;
  }
  console.log(row);
}
