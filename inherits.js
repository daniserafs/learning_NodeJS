// inheriting the functionalities from EventEmittir to another function

const { inherits } = require('util') // util is core from node
const { EventEmitter } = require('events') // the functionalities from EventEmitter is what we want to inherit to another function

function Character(name) { // this is a constructor function, later on the code I'll need to add a name to a character
    this.name = name
}

inherits(Character, EventEmitter) // The signature '(constructor: unknown, superConstructor: unknown): void' of 'inherits' is deprecated.ts(6387)

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} Colorado!`))

console.log('Oh! E agora, quem poderá me defender?')
chapolin.emit('help') 


