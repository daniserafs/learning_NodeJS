// this is is probably really wrong but i had to do it this way because according to documentation inherits is legacy now
// if you know how to do this let me know so I can learn too!
// I tried to replicate the file inherits.js here using another sintaxe.
const EventEmitter = require('events');

class Character extends EventEmitter { // here it is suppose to be the constructor function I want to inherit EventEmitter functionalities
    write(name) { // i dont know why i did this part i just tried to follow the documentation
        this.emit('help', name);
    }
}

const chapolin = new Character();

chapolin.on('help', (name) => { 
    console.log(`Eu, o ${name} `);
});
console.log("E agora quem poderá me defender?")
chapolin.write('Chapolin Colorado') // instead of having the name inside the character i can have the name from .write()

// again, if you know how to make this look more like the file inherits.js please tell me!!!

