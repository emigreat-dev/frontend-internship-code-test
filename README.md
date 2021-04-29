# Emigreat Summer internship code test

Thanks for showing an interest in the Emigreat summer internship program!  In order to submit your code test, please fork this repository and send us a link to your solution together with your cover letter when you respond to the internship advertisement.

## Javascript question: event loop

### Question

In what order will the following numbers be logged, and why?

```
console.log(1)
setTimeout(() ⇒ console.log(2), 5000)
setTimeout(() ⇒ console.log(3))
Promise.resolve(4).then(console.log)
console.log(5)
```

### Answer

The numbers will be printed as follows:
1
5
4
3
2

1 and 5 are printed first respectively, according to their order in the code, and because they’re not printed in a setTimeOut function or a promise.

4 is printed next because it’s a promise with a “thenable” value, so it follows the “then” to return the resolved value.

3 is returned next because the printing is happening inside a setTimeout function, with no time specified in the parameters.

Finally, 2 is returned because it’s also associated with a setTimeout function, but the value is printed after 5000 milliseconds.

## Javascript test: arrays

Write a function that accepts an array of strings. Return the longest string in the array.

### Solution
Provide the solution in the given file: [longestString.js](https://github.com/emigreat-dev/internship-code-test/blob/main/longestString.js)

## CSS test: [https://cssbattle.dev/](https://cssbattle.dev/)
Pick any css battle where the solution requires at least three html elements (or one html element + pseudo elements, e.g. 'before' and 'after').

Submit the resulting css together with a link to the battle you chose.

### Solution
Provide your solution in the given file: [cssBattle.css](https://github.com/emigreat-dev/internship-code-test/blob/main/cssBattle.css)

## Personal project

Provide a link to a personal project that you're proud of and happy to share with us. It can be anything from a component to a system.

### Link to project
https://github.com/nablo1/DIT341-project
