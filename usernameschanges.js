function possibleChanges(usernames) {
  //Determine if each username can be changed so that any two letters are swaped and this action allows the user name to be located at a lower position according to the alphabetical order
  //the usernames are not in order so first order the user names alphabetically
  //create a copy of the array
  //create dictionary with the usernames
  let usernamesLength = usernames.length
  let results = new Array(usernamesLength)
  //iterate over the array and swap the values and check against the original one
  for (let m = 0; m < usernamesLength ; m++){
    results[m] = 'NO'
    let nameLength = usernames[m].length
    for (let i = 0 ; i < nameLength-1 ; i++){
      //swaping
      for (let k = i+1; k < nameLength ; k++){
        let copy = [...usernames[m]]
        let temp = copy[i]
        copy[i] = copy[k]
        copy[k] = temp
        console.log(copy)
        if (copy.join("") < usernames[m]) {
          results[m]=('YES')
          break
        } 
      }
    }
  }
  return results
}