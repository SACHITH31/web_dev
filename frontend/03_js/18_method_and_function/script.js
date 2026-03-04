// when a function is said to be an method, if that function is in the OBJECT. for example:
const myObject = {
    'firstName' : 'sachith',
    'add': (a, b) => {
        return a + b
    }, // here this add is an actually an function. but it is in the object so we can also call this as the METHOD
    // how do we access this ? myObject.add(1, 2) returns 3
    // another way for creating the method using the new ES6 is:
    'subtract' (a, b) {
        return a - b
    },
    multiply (a, b) {
        return a * b
    },
    cube : (a) => {
        return a ** 3
    }
}

console.log(myObject.firstName)
console.log(myObject.add(2, 3))
console.log(myObject.subtract(12, 2))
console.log(myObject.multiply(2, 3))
console.log(myObject.cube(2))

// THE FUNCTIONS WHICH ARE WRITTEN IN THE OBJECTS IS KNOWN AS (FUNCTIONS OR METHODS)
// THE FUNCTIONS WHICH ARE WRITTEN OUTSIDE THE OBJECTS WHICH MEANS NOT IN THE OBJECTS THEN WE WON'T CALL THEM AS METHODS..