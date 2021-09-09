// `process.argv` shows a list of arguments
console.log(process.argv); // `process.argv` return an array and if we type more elements in the terminal they'll be included

// now showing the message your name is Daniela Serafim
console.log('your name is', process.argv[2] + ' ' + process.argv[3]) // when executing in the terminal `node process Daniela Serafim` for my name, try with yours

// now let's try it more organized
const firstName = process.argv[2]
const lastName = process.argv[3]

// the following concatanations are all correct
console.log('your name is', firstName + ' ' + lastName);
console.log('your name is' + ' ' + firstName + ' ' + lastName);
console.log('your name is', firstName, lastName);

// you can also use template literals
console.log(`your name is ${firstName} ${lastName}`)