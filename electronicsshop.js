function getMoneySpent(keyboards,drives,b) {
  // orders every list
  const lenKeyboards = keyboards.length
  const lenDrives = drives.length
  let copyKeyboards = new Float64Array(keyboards) 
  let copyDrives = new Float64Array(drives)
  copyKeyboards.sort().reverse()
  copyDrives.sort().reverse()
  console.log(copyDrives)
  console.log(copyKeyboards[0])

  let maxWithMoney = 0

  for (let indexK = 0 ; indexK < lenKeyboards ; indexK++){
    let amount
    console.log(copyKeyboards[indexK])
    for (const element of copyDrives) {
      amount = copyKeyboards[indexK] + element
      console.log(amount)
      if (amount <= b) break 
    }
    if (amount > maxWithMoney && amount <= b) maxWithMoney = amount
  }
  if (maxWithMoney === 0) return -1
  return maxWithMoney
}