function minimumDistances(a) {
  /* convert the array to a set in order to identify unique elements */
  let setArray = new Set(a)
  let minimunDistance = Infinity
  for (let number of setArray){
    let register
    let indexesArray = a.flatMap((value, index) => {
      if (value === number) return index
      return []
    })
    let differencesArray = indexesArray.flatMap((value,index) => {
      if (index + 1 >= indexesArray.length){
        return []
      }
      return indexesArray[index + 1] - value
    })
    differencesArray.sort((a,b) => a - b)
    register = differencesArray[0]
    if (register != undefined) {
      if (register < minimunDistance) minimunDistance = register
    }
  }
  if (minimunDistance === Infinity) minimunDistance = -1
  return minimunDistance
}

console.log(minimumDistances([7, 1, 3, 4, 1, 7])); 