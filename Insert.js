function searchInsert(numb, target) {
  let left = 0;
  let right = numb.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (numb[mid] === target) {
      return mid;
    } else if (numb[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}
const numb = [1, 3, 5, 6];
const target = 7;
const index = searchInsert(numb, target);
console.log(index);
