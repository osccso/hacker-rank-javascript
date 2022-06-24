function dayOfProgrammer(year) {
  // range of years [1700,2700]
  //check if the calendar is Julian or Gregorian or Special Case (1918)
  //conditions
  const dayNumber = 256
  const condValid = year >= 1700 && year <=2700 && Number.isInteger(year)
  const condJulian = year <= 1917
  const condGregorian = year >= 1919
  const condTransition = year === 1918
  const sumLeap = 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 
  const sumNonLeap = sumLeap - 1 
  const sumSpecial = 31 + (28-13) + 31 + 30 + 31 + 30 + 31 + 31
  //answer
  let date


  if (condValid) {
    //condition for division
    const condBy4 = year%4 === 0
    const condBy400 = year%400 === 0
    const condBy100 = year%100 === 0
    if (condJulian) {
      if (condBy4) {
        date = `${dayNumber - sumLeap}.09.${year}`
      }
      else {
        date = `${dayNumber - sumNonLeap}.09.${year}`
      }
    }
    else if (condGregorian){
      if (condBy400 || (condBy4 && !condBy100)){
        date = `${dayNumber - sumLeap}.09.${year}`
      }
      else {
        date = `${dayNumber - sumNonLeap}.09.${year}`
      }
    }
    else {
      date = `${dayNumber - sumSpecial}.09.${year}`
    }
  }
  return date
}