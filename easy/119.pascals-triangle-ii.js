// https://leetcode-cn.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  if (rowIndex === 0) return [1]
  // if (rowIndex === 1) return [1,1]

  const preRow = getRow(rowIndex - 1);
  const thisRow = []//new Array(rowIndex + 1); 
  for (let j = 0; j < rowIndex + 1; j++) {
      thisRow[j] = (preRow[j - 1] || 0) + (preRow[j] || 0)
  }
  return thisRow
  
};