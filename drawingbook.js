function pageCount(n,p){
  //find the minimun amount of turns in order to see page p
  //verify if its the first or the last page in which case the turns required are 0
  let turns = 0
  if (p == 1 || p == n || (n%2 == 1 && p == n-1)) return turns
  //count from the front
  const turnsFront = parseInt(p/2)
  //count from the back
  let turnsBack
  if (n%2 == 0) turnsBack = Math.ceil((n-p)/2)
  if (n%2 == 1) turnsBack = Math.floor((n-p)/2)
  turns = Math.min(turnsFront, turnsBack)
  return turns
}