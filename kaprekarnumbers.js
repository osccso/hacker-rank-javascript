function kaprekarNumbers(p, q) {
  let kaprekarList = []
  let squared
  let numberStr
  let squaredStr
  let digits
  let rightPart
  let leftPart
  let totalLength
  let numberRight = 0
  let numberLeft = 0
  for (let i = p; i <= q; i++) {
    numberStr = String(i)
    squared = i * i
    squaredStr = String(squared)
    digits = numberStr.length
    totalLength = squaredStr.length
    rightPart = squaredStr.slice(totalLength-digits,totalLength)
    leftPart = squaredStr.slice(0, totalLength-digits)
    numberRight = parseInt(rightPart)
    numberLeft = parseInt(leftPart)
    if (i === numberRight + numberLeft || i === 1){
      kaprekarList.push(i)
    }
  }
  if (kaprekarList.length === 0){
    console.log('INVALID RANGE')
  }
  else{
    console.log(...kaprekarList)
  }
  return kaprekarList
}

console.log(kaprekarNumbers(1,2)); 
