//if n = 4
// print the following pattern
// * * * *
// * * * *
// * * * *
// * * * *

// i is responsible for rows and j for columns

let n = 4;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j < n; j++) {
    row = row + "*" + " "; // new approach
  }
  console.log(row);
}
