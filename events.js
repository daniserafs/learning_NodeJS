// event modules are already inside nodejs
const { EventEmitter } = require('events')
const ev =  new EventEmitter() // EventEmitter is a class 

ev.on('saySomething', (message) => {
    console.log('I heard you, ', message)
}) //.on is suppose to listen every emitt
ev.emit('saySomething', 'Dani') // to emit an event you only need .emit() but only this line will not be able to do anything because there needs to be a listener for the event somewhere in the code
ev.emit('saySomething', 'Jin')
ev.emit('saySomething', 'Jimin')
ev.emit('saySomething', 'Jungkook') // trying more names to see what happens


// using once for listening events
ev.once('saySomethingElse', (person) => {
    console.log('I heard you,', person)
}) // using .once just the first event will be heard and therefore it will be the only one showing on terminal

ev.emit('saySomethingElse', 'RM')
ev.emit('saySomethingElse', 'Jhope')
