// strings
let myName: string = 'sachith'
let myAnotherName: string = 'ricky'
let totalName: string = 'My name is: ' + myName + ' and another name is: '+ myAnotherName
console.log(totalName)


// numbers
let myAge: number = 19
let cgpa: number = 8.7
// console.log(typeof (myAge + cgpa))


// date
let timeNow: Date = new Date()
// console.log(timeNow.getDate() + '.' + timeNow.getMonth() + '.' + timeNow.getFullYear())
// console.log(typeof timeNow)


// boolean
let trueVariable : boolean = true
let falseVariable : boolean = false


// UNION TYPE: In TypeScript, a union type allows a variable to hold values of multiple different types, providing flexibility while maintaining type safety. It is defined using the vertical bar (|) symbol to separate each possible type. 
let eitherStringOrNumber1: (string | number) = 'abc'
let eitherStringOrNumber2: (string | number) = 12
console.log(typeof eitherStringOrNumber1)
console.log(typeof eitherStringOrNumber2)


// undefined
let projectCompletionDate: (undefined | string) = undefined
console.log(`Project completion date is: ${projectCompletionDate}`)
const date = new Date()
projectCompletionDate = date.getDate() + '.' +  (date.getMonth() + 1) + '.' + date.getFullYear()
console.log(`Project completion date is: ${projectCompletionDate}`)


// any
let testAnyDataType: any;
testAnyDataType = 'sachith'
testAnyDataType = 12
testAnyDataType = true
console.log(testAnyDataType);
// here any means it allows any data type to store in that particular variables

