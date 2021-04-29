// TODO: Write a function that accepts an array of strings. Return the longest string in the array.

const longest = arr.reduce( (a, b) => a.length > b.length ? a : b, 0);
