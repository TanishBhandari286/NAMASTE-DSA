let target = 80;
let arr = [2, 3, 4, 5, 7, 8, 9];

function LinearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

console.log(LinearSearch(arr, target));
