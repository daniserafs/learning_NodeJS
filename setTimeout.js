// setTimeout will run a function after X milliseconds

const timeOut = 3000 // 3 seconds
const finished = () => console.log('done!') // function we will run

setTimeout(finished, timeOut) // two arguments: the fuction we will run and how much time it's necessary to wait; finished is a callback function 
console.log('hey') // for comparison this will show first on terminal and 3 seconds latter 'done!' will sho