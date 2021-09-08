/* How does NODEJS work? 
    1) first of all each fuction: c()/ b()/ a()/ will be registered in memory and it all starts when function a() is called
    2) when fuction a() is called the first part of it is to call fuction b() and the application goes that way
    3) in fuction b() the console will show b and the return of the fuction is calling fuction c()
    4) fuction c() is executed it will show c on the console and have an empty return
    5) after the return from fuction c() the application will continue fuction a() by showing a on the console and having an empty return

*/
function c() {
    console.log('c')
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return // returns undefined
}

a()

/*
For the following application only a small change makes it runs differently
will the the sequence: b -> a -> undefined -> c
this happends because while setTimeout stop the fuction c() for one second the application continues to run and it ends! After it has finished and the time chosen for setTimeout has passed it shows the message on the console. Even if it's zero seconds, just the fact that setTimeout is there to send the fuction to Worker Threads will make the fuction leave the event queue.
*/
function c() {
    setTimeout(() => { console.log('c') }, 1000)
    return
}

function b() {
    console.log('b')
    return c()
}

function a() {
    b()
    console.log('a')
    return // returns undefined
}

a()