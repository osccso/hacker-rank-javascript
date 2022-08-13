function workbook(n, k, arr) {
  // n: amount of chapters
  // k: amount of problems per page
  // arr : arr[i] amount of problems per chapter i
  // count the number of problems that meet the following condition : 
  // the problem index (within a chapter) is same as the book's page where it is located

  //go through every chapter and figure out page range per chapter
  let pageCount = 0
  let result = 0
  let numberPages
  let firstPage 
  let lastPage
  for (let i = 0; i < n; i++){
    firstPage = pageCount + 1
    lastPage = firstPage + Math.ceil(arr[i]/k) - 1
    pageCount = lastPage
    numberPages = lastPage - firstPage + 1
    /*
     lastPage > arr[i] :  if the last page is greater than the number of problems theres no way you can have a match in that chapter 
     arr[i] < firstPage : if the number of problems for that chapter is less than the first page there's no way they can match
     firstPage !== 1 && k === 1: if the problems per page is equal to 1 and the first page of the chapter is different to 1 they'll never match 
    */
    console.log(firstPage, lastPage)
    if (lastPage > arr[i] || arr[i] < firstPage || (firstPage !== 1 && k === 1)) continue //no way they can match
    // whatever is left here are the matches
    if (k === 1 && (firstPage === 1 || lastPage == arr[i])) {
      result += arr[i]
      console.log('multiple matches');
    }
    // to spot this pattern notice that if the number of the problem that matches the page is at the end it means the next problem necessarily matches the next page so it will be two matches in the chapters that meet this condition.
    else if((firstPage -1) % (k-1) === 0 && firstPage !== 1 && numberPages != 1){
      result += 2
      console.log("2 matches")
    }
    else{
      result += 1
      console.log('1 match');
    }
  }
  return result
}

// se prueba la funcion
console.log(workbook(100,100,[1,100,100,100,35,1,100,100,1,1,1,69,1,74,100,100,100,100,100,100,1,100,100,72,100,100,12,56,100,1,30,1,62,1,1,100,100,1,100,100,63,100,100,100,100,1,100,100,70,100,100,100,66,100,100,100,1,1,100,1,100,76,4,100,100,100,100,100,100,100,50,100,100,100,100,100,100,100,100,100,33,100,100,100,100,1,100,3,100,100,100,100,100,100,18,12,100,100,100,100]))









