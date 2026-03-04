// function defination
function sayHi () {
    console.log('Hello Nakamaaa..')
}

// function call
// sayHi()

function introduceMe (parameter1, parameter2, parameter3) {
    console.log(`Hi I'm parameter1 called from a function call through argument1`)
    console.log(`Hi I'm parameter2 called from a function call through argument2`)
    console.log(`Hi I'm parameter3 called from a function call through argument3`)
}
const a = introduceMe('argument1', 'argument2', 'argument3')
console.log(a) // returns undefined because the introduceMe function won't return any value


function returnSomething (randomStuff) {
    return randomStuff;
}
const temp1 = returnSomething('a') // returns a
const temp2 = returnSomething(1) // returns a


function defaultParameters (userName = 'GUEST', age) {
    // console.log(`Heloo ${userName}`)
    console.log(`Heloo ${userName} your age is ${age}`)
}
defaultParameters('sachith', 19)