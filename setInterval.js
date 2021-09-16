// setInterval  will run a fuction N times
// after X milliseconds
const timeOut = 1000 
const checking = () => console.log('checking!')

setInterval(checking, timeOut) // 2 arguments first the function we want to run and second the interval we want it to run, also the function will run indefinitely