// TODO: Write a function that accepts an array of strings. Return the longest string in the array.

function findLongestString(stringArray){

  if(stringArray.constructor !==  Array || !(stringArray.every(i => (typeof i == "string")){  // make sure we pass an array and all elements are strings
    throw "findLongestString argument should be of type Array with string elements"}          // Could probably throw better error message or just break with a log message to keep site up.

  var longestIndex = 0;                                                                       // Save index to access it later, first element as default.
  for(i=0, i < stringArray.length; i++{                                                       // itterate thru each string.
    if(stringArray[i] > stringArray[longestIndex]){                                           // Is string i longer than then current longest string.
      longestIndex = i;                                                                       // Set this index as the longsets string.
    }
  }return stringArray[lonegstIndex];                                                          // Return index of the longest string.
}
