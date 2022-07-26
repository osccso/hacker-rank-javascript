function taumBday(b, w, bc, wc, z) {
  //determine if it is worthy to transform the black gifts to white gifts and viceversa
  let array = [bc, wc, bc + z, wc + z]
  let minimun_cost
  //order the array
  array.sort((a,b) => a - b)
  console.log(array)
  let bigIntB = BigInt(b)
  let bigIntW = BigInt(w)
  let bigIntArr0 = BigInt(array[0])
  let bigIntArr1 = BigInt(array[1])
  if (array[0] == bc){
    minimun_cost = bigIntB * bigIntArr0 + bigIntW * bigIntArr1
  }
  else{
    minimun_cost = bigIntW * bigIntArr0 + bigIntB * bigIntArr1
  }
  return minimun_cost
}

console.log(taumBday(742407782, 90529439, 847666641, 8651519, 821801924))