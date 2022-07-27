//another challenge (not hackerrank)
function solution(matrix) {
  // loop over all k borders
  let n = matrix[0].length
  let arrayFinal = []
  //make a copy of matrix
  copy_matrix = []
  matrix.forEach(row => copy_matrix([...row]))
  for (let k = 0; k <= Math.floor((n-1)/2); k++){
      let kArray = []
      console.log(k, n)
      console.log(matrix[k].slice(k, n - k))
      console.log( matrix[n - k - 1].slice(k, n - k))
      let top = matrix[k].slice(k, n - k)
      let bottom = matrix[n - k - 1].slice(k, n - k)
      let j = k
      let m = n - k - 1
      console.log(j);
      console.log(m);
      let left = []
      let right = []
      for (let i = k + 1 ; i < n - (k+1) ; i++){
          left.push(matrix[i][j])
          right.push(matrix[i][m])
      }
      console.log(left);
      console.log(right);
      keyArray = kArray.concat(top,bottom,left,right)
      keyArray.sort((a,b) => a - b)
      
      for (let i = k + 1 ; i < n - (k+1) ; i++){
        left.push(matrix[i][j])
        right.push(matrix[i][m])
      }
      copy_matrix = keyArray.slice(n - k- 1,)
      copy_matrix = keyArray.slice()
      copy_matrix = keyArray.slice()
      arrayFinal.push(keyArray)
  }
  // matrixFinal = 
  return arrayFinal
}

console.log(solution([[9, 7, 4, 5],
  [1, 6, 2, -6],
  [12, 20, 2, 0],
  [-5, -6, 7, -2]]),'This is the solution');