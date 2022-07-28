function chocolateFeast(n, c, m) {
  //amount to spend n
  //cost per chocolate c
  //the amount of wrappers to receive 1 extra bar
  let firstBuy = Math.floor(n / c)
  let wrappers = firstBuy
  let chocolates = firstBuy
  while (wrappers >= m) {
    let leftWrappers
    chocolates += Math.floor(wrappers / m)
    leftWrappers = wrappers % m
    wrappers = leftWrappers + Math.floor(wrappers / m)
  }
  return chocolates
}

console.log(chocolateFeast(7,3,2))