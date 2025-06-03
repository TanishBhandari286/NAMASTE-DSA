// print the following loop
//1
//1 0
//1 0 1
//1 0 1 0
//1 0 1 0 1

let n = 5;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++)
    if (j % 2 == 0) {
      row = row + "1";
    } else {
      row = row + "0";
    }
  console.log(row);
}
