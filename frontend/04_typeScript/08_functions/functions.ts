function addTwoNumbers (a: number, b: number): number {
    return a + b
}
console.log(addTwoNumbers(5, 10)) // Output: 15

function greet(name: string): string {
    return `Hello, ${name}!`
}
console.log(greet("sachith")) // Output: Hello, sachith!

function calculateArea(radius: number): number {
    return Math.PI * radius * radius
}
console.log(calculateArea(5)) // Output: 78.53981633974483

function isEven(num: number): boolean {
    return num % 2 === 0
}
console.log(isEven(4)) // Output: true
console.log(isEven(7)) // Output: false

function getFullName(firstName: string, lastName: string, age? : number): string {
    return `${firstName} ${lastName}`
}
console.log(getFullName("KASA", "SACHITH")) // Output: KASA SACHITH
console.log(getFullName("KASA", "SACHITH", 25)) // Output: KASA SACHITH

function findMax(a: number, b: number): number {
    return a > b ? a : b
}
console.log(findMax(10, 20)) // Output: 20

// for returning void
// void means returning nothing and by default for every function if we are not returning anything then it is void
function logMessage(message: string): void {
    console.log(message)
}
logMessage("This is a log message.") // Output: This is a log message.