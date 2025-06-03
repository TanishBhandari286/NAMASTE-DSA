//print the following pattern
//1
//0 1
//0 1 0
//1 0 1 0

// when n = 4

let n = 4;

let k = 1;
for (let i = 0; i < n; i++) {
  let row = " ";
  for (let j = 0; j <= i; j++) {
    row = row + k;
    k++;
    if (k > 1) {
      k = 0;
    }
  }
  console.log(row);
}
