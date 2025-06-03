// write a function that returns the count of the digits in a number

function countDigits(num) {
  if (num == 0) {
    return 1;
  }
  num = Math.abs(num);
  let count = 0;
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }
  return count;
}
let n = 259;

console.log("no of digits in n are " + countDigits(n));
