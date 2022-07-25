function repeatedString(s, n) {
  //find out length of string s
  const stringLength = s.length
  //find out how many a's in s
  let count = 0
  for (let char of s){
    if (char === 'a') count += 1
  }
  //calculate how many times the string repeats over 
  const times = Math.floor(n / stringLength)
  const remainder = n % stringLength
  const lastArray = s.slice(0,remainder)
  let additional_count = 0 
  for (let char of lastArray){    
    if (char === 'a') additional_count += 1
  }
  return times * count + additional_count
}
