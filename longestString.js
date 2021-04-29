// TODO: Write a function that accepts an array of strings. Return the longest string in the array.

function getLongestString(arr) {
  if(arr.every(i => (typeof i === "string"))) {
    return arr.reduce( (a, b) => a.length > b.length ? a : b, 0);
  }
  return "The array contains elements that are not strings";
}
