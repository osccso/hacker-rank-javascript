function libraryFine(d1, m1, y1, d2, m2, y2){
  let fine

  class TimeObj{
    constructor(_day=0, _month=0, _year=0){
      this.day = _day
      this.month = _month
      this.year = _year
    }
    difference(Obj){
      let diff = new TimeObj()
      diff.day = this.day - Obj.day
      diff.month = this.month - Obj.month
      diff.year = this.year - Obj.year
      return diff
    }
    get(){
      return [this.day, this.month, this.year]
    }
    beforeOrOn(Obj){
      if (this.year < Obj.year){
        return true
      }
      else if (this.year === Obj.year){
        if (this.month < Obj.month){
          return true
        }
        else if (this.month === Obj.month){
          if (this.day <= Obj.day){
            return true
          }
          else {
            return false
          }
        }
      }
      return false
    }
  }
  /* processing the dates */
  const dateReturn = new TimeObj(d1, m1, y1)
  const dateDue = new TimeObj(d2, m2, y2)
  /* calculating the difference (late) */ 
  const [d3, m3, y3] = (dateReturn.difference(dateDue)).get()
  
  /* if the book is returned on or before the expected return date */
  if (dateReturn.beforeOrOn(dateDue)){
    fine = 0
  }
  else if (m3 == 0 && y3 == 0){
    fine = 15 * d3
  }
  else if (y3 == 0){
    fine = 500 * m3
  }
  else {
    fine = 10000
  }
  return fine 
}

console.log(libraryFine(2,7,1014,1,1,1014))
