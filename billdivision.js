function bonAppetit(bill,k,b){
    var sum = 0
    for(var i = 0; i < bill.length; i++){
      sum += bill[i]
    }
    sum -= bill[k]
    sum /= 2;
    if(sum == b){
      console.log("Bon Appetit");
      return
    }   
    return console.log(b - sum)
}