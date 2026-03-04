// SHALLOW COPY

// FOR STRINGS
let myName = 'sachith'
let anotherName = myName
//here the address of this 2 variables will be same(for now it is @15193)
//but when we update the value of anotherName then the address of this will get's changed
anotherName = 'ricky'
// now the both the addresses will be not same



// FOR ARRAYS AND OBJECTS
let myArray1 = ['mango', 'apple', 'banana']
let copiedMyArray1 = myArray1

console.log(myArray1) // [1, 2, 3]
console.log(copiedMyArray1) // [1, 2, 3]
