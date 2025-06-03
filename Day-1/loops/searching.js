// write a function that searches for an element in an array and returns the index , if the element is not present then just return -1

function searchele(target, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }

  return -1;
}

let arr = [-2, 9, 4, 12, 111, 111112];

let target = 9;
console.log(searchele(target, arr));

// write a function that returns the number of negative numbers in an array

function countneg(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 1) {
      count++;
    }
  }
  return count;
}

console.log("number of -ve numbers are " + countneg(arr));

// write a function that returns the largest no in an array

function maxnum(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxnum(arr));
