function secondLargest(arr) {
  if (arr.length < 2) {
    return null;
  }
  max = -Infinity;
  smax = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      smax = max;
      max = arr[i];
    } else if (arr[i] > smax && arr[i] != max) {
      smax = arr[i];
    }
  }
  return smax;
}

let arr = [3, 5, 1, 3, 5, 67, 889, 889];
//edge cases
// what if array is empty or has only one element?
// what if -ve elements are there
// what if array has duplicates
// ask the interviewer

console.log(secondLargest(arr));
