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

1. console.log(1) // This I would reason comes first since it will be first to be pushed to the event que.
	
5. setTimeout(() ⇒ console.log(2), 5000) // Here we introduce a 5000 milisecond, 5 seconds, delay alltough after reading documentation there is no guarante that it will be exactly that (could be a bit longer depending on if the thread is busy doing something else) but with no other delay in hand I'd say this would come last.
												
3. setTimeout(() ⇒ console.log(3)) // By default setTimeout has 0 as a delay, so this would basically be pushed to the exectution stack when the program get's here.

4. Promise.resolve(4).then(console.log) // Here the log function will be put at the end of the exectution stack. I would assume this would be before the 5sec delay though. For transparancy I don't fully follow how promises etc works.

2. console.log(5) // This would be resolved instantly.

Proposed sequence: 1,5,3,4,2


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

I've come to realize that outside of school, I've not saved any projects since most have been to test and learn. But the school projects I have that I'm proud of are:

* The app theme switcher made by me for an android app (written in Java) we build: https://github.com/Ponnis/Hubba
* Labs from a machine coding course in C, which requires the hardware to run. Some of this code was provided but we were supposed to be two but my partner never showed for working sessions so I basically did it by my self: https://github.com/ForrestIT/Dat017
