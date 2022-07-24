function cutTheSticks(arr) {
  let array = [...arr]
  let results = []
  let min_number
  let new_array = []
  while (array.length){
    /* find out minimun number */
    min_number = Math.min(...array)
    /* cut out the minimun number discarding all the elements that are 0*/
    new_array = array.filter(number => (number - min_number) != 0)
    new_array = new_array.map(number => number - min_number)
    results.push(array.length)
    array = [...new_array]
  }
  return results
}

console.log(cutTheSticks([5, 4, 4, 2, 2, 8]))
