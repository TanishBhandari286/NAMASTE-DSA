/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let xcopy = x;

  let result = 0;
  x = Math.abs(x);

  while (x > 0) {
    let rem = x % 10;
    x = Math.floor(x / 10);
    result = 10 * result + rem;
  }
  let limit = 2 ** 31;
  if (result < -limit || result > limit) {
    return 0;
  }
  if (xcopy < 0) {
    return -result;
  } else {
    return result;
  }
};
