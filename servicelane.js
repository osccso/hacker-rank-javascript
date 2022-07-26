function serviceLane(width, cases) {
  let results = []
  //iterating the cases
  for (let c of cases){
    results.push(Math.min(...width.slice(c[0], c[1] + 1)))
  }
  return results
}