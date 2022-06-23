function sockMerchant(n,ar){
  // get the unique values and spread them in order to have a list
  const uniqueValues = [...new Set(ar)]
  let count = []
  //build an array with the count for every element
  uniqueValues.forEach(element => {
    const filtered = ar.filter(item => item == element)
    count.push(filtered.length)
  });
  //count the pairs
  let pairs = 0
  count.forEach(item => {
    pairs += parseInt(item/2)
  })
  return pairs
}