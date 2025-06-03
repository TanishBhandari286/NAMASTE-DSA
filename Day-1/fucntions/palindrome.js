function revNo(x) {
  x = Math.abs(x);
  if (x == 0) {
    return "Palindrome";
  }

  let result = 0;
  while (x > 0) {
    let rem = x % 10;
    result = 10 * result + rem;
    x = Math.floor(x / 10);
  }
  return result;
}
let n = 101;

let palin = revNo(n);

if (n == palin) {
  console.log("palindrome number");
} else {
  console.log("Non-Palindrome");
}
