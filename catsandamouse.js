function catAndMouse(x,y,z){
  //find out differences in absolute value
  let distanceCatA = Math.abs(z-x)
  let distanceCatB = Math.abs(z-y)
  let print = 'Mouse C'
  if (distanceCatA < distanceCatB) print = 'Cat A'
  if (distanceCatB < distanceCatA) print = 'Cat B'
  return print 
}