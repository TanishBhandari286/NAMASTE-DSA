//*
//* *
//* * *
//* * * *

let n = 4;

for (let i = 0; i < n; i++) {
  let row = " ";
  for (j = 0; j <= i; j++) {
    row = row + "*" + " "; // new approach
  }
  console.log(row);
}
