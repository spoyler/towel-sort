
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix == null || matrix.length == 0)
    return [];

  let res = new Array();
  for (let i = 0; i < matrix.length; i++)
  {
    if (i % 2 == 0)
    {
      for (let elem of matrix[i])
        res.push(elem)
    }
    else
    {
      let rev = matrix[i].reverse();
      for (let elem of rev)
        res.push(elem)
    }
  }

  return res;
}
