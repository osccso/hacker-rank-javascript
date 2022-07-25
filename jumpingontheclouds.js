function jumpingOnClouds(c) {
  let location = 0
  let numberOfClouds = c.length
  let jump
  let count = 0
  while (location < numberOfClouds - 1){
    jump = 2
    if (c[location + jump] === 1) jump = 1
    location += jump
    count += 1
  }
  return count
}