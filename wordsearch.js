const transpose = function(matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result.push([]);
    for (let j = 0; j < matrix.length; j++) {
      result[i].push(matrix[j][i]);
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }
  const output = transpose(letters);
  const verticalJoin = output.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    console.log(l);
    if (l.includes(word)) return true;
  }
  return false;
};


module.exports = wordSearch;