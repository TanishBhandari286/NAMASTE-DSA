let arr = [2, 4, 5, 6, 8, 2];

function sum(n) {
  if (n == 0) {
    return arr[0];
  }

  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));
