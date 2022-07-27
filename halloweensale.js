function howManyGames(p, d, m, s) {
  let difference = p - m
  let sequenceLength = Math.floor((p - m) / d)
  let sum = p
  let games
  if (p > s){
    games = 0
    return games
  }
  for (let i = 1; i <= sequenceLength; i++){
    sum += p - i * d
    if (sum > s) {
      games = i
      return games 
    }
  }
  games = sequenceLength + 1
  while (sum <= s){
    sum += m
    if (sum > s) {
      return games 
    }
    games += 1
  }
}