function countingValleys(steps,path) {
  //First check if is a valid path(one with only Up and Downs and that starts at sea level and ends at the same level)
  let pathUnique = [...new Set(path)]
  const downNumber = path.filter(step  => step === 'D').length
  const upNumber  = path.filter(step => step === 'U').length
  let condValid = pathUnique.length === 2 && pathUnique.includes('U') && pathUnique.includes('D') && downNumber === upNumber

  if (condValid) {
    //counting valleys it starts at sea level
    let level = 0
    let stepsTaken = 0
    let valleys = 0
    //implementing while loop to make it faster cause n can be up to 10^6
    while (stepsTaken <= steps){
      let newLevel
      if (path[stepsTaken] === 'U') {
        newLevel = level + 1
      }
      else {
        newLevel = level - 1
      }
      // condition to count the valley
      if (level === -1 && newLevel === 0) {
        valleys += 1
      }
      level = newLevel
      stepsTaken += 1
    }
    return valleys
  }
  throw 'Conditions not met'
}