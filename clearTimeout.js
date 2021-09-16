// clearTimeout will cancel a timeOut
const timeOut = 3000
const finished = () => console.log('done!')

let timer = setTimeout(finished, timeOut)
clearTimeout(timer) // everything before will be registered but will be canceled because clearTimeout cancels a chosen timeOut in this case was the variable timer. There will be nothing to show on terminal