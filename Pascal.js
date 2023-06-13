function generatePascalTriangle(numRows) {
  const triangle = [];
  for (let row = 0; row < numRows; row++) {
    const rowArray = [];
    for (let col = 0; col <= row; col++) {
      if (col === 0 || col === row) {
        rowArray.push(1);
      } else {
        rowArray.push(triangle[row - 1][col - 1] + triangle[row - 1][col]);
      }
    }
    triangle.push(rowArray);
  }
  return triangle;
}
const numRows = 5;
const triangle = generatePascalTriangle(numRows);
console.log(triangle);
