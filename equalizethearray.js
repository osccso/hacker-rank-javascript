function equalizeArray(arr) {
  //get the length of the array
  let array_length = arr.length
  //make arr a set in order to figure out its elements.
  const setArray = new Set(arr)
  //create a copy of the array and sort the elements
  let arrayCopy = [...arr]
  arrayCopy.sort((a,b) => a - b )
  //loop through every element of the set and count
  let max_count = 0
  setArray.forEach( element => {
    let count = 0
    for (let number of arrayCopy){
      if (element === number) count += 1
    }
    if (count > max_count) max_count = count
  })
  return array_length - max_count
}