// here doSomething is an higher order function
// and callback parameter is an function which is passed an parameter so it is an callBack function
// function doSomething(callback) {
//   callback();
// }
// doSomething(() => {
//   console.log("Done");
// });



// setTimeout(() => {
//     console.log("From set time out")
// }, 1000)
// console.log("hi-1");
// console.log("hi-2");
// console.log("hi-3");
// console.log("hi-4");


// console.log("Start");
// setTimeout(() => {
//   console.log("Middle");
// }, 2000);
// console.log("End");


// function myFunc () {
//     console.log("Hello From myfunc")
// }
// setTimeout(myFunc, 2000);
// IMPORTANT POINT: 
// whenever we call a function in a setTimeOut then we should not call the function with () instead we have to write the name of that function only.
// if we write the function call thenn it won't act as the async, instead it acts as the synchronous


console.log('Hi-1');
console.log('Hi-2');
console.log('Hi-3');

setTimeout(() => {
    console.log('settime-1')
}, 2000);

setTimeout(() => {
    console.log('settime-2')
}, 1000);


for (let i = 1; i <= 50; i++) {
    console.log(i)
}

setTimeout(() => {
    console.log('settime-3')
}, 0);

// setTimeout(a, 0); // here this will throw error because we are calling a function before intialisation using the const which is declaring

const a = function () {
    console.log('Hello from a')
}
// a()
setTimeout(a, 10000);
