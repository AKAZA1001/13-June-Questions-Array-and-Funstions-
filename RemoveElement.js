function removeElement(nums, val) {
  let nextIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[nextIndex] = nums[i];
      nextIndex++;
    }
  }
  return nextIndex;
}
const numb = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
const newNums = removeElement(numb, val);
console.log(newNums);
console.log(numb.slice(0, newNums));
