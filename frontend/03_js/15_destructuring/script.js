const colours = ['red', 'blue', 'yellow', 'black', 'pink']

// normal access the array elements without using this destructuring
// const color1 = colours[0]
// const color2 = colours[1]
// const color3 = colours[2]

// for destructuring the array we use []
// const [color1, color2] = colours
// console.log(color1) // red

// for accessing only black color only
// const [,,, color4] = colours
// console.log(color4) //black

// what if we access more than the length of the colours array
const [,,, color4, color5, color6] = colours
// console.log(color6) // undefined





// OBJECT DESTRUCTURING
// IMPORTANT POINT: Object keys must match destructuring names — unless you rename them using key: newName.
const userDetails = {
    'name': 'sachith',
    'age': 19,
    'address': {
        city: 'kurnool',
        state: 'andhra pradesh'
    }
}

// access the object elements without using the destructuring
// const name1 = userDetails.name
// const age = userDetails.age
// console.log(name1, age)

// using destructuring for objects
const {name, age} = userDetails
// console.log(name, age)

// another way of destructuring the above objects by changing the variable name to userName, userAge
// const {name: userName, age: userAge} = userDetails
// console.log(userName, userAge)
// console.log(name) // name is not defined

// destructuring the nested objects
// const {address} = userDetails
// console.log(address) // {city: 'kurnool', state: 'andhra pradesh'}

// if we want to get the city
// method-1
const {address} = userDetails
// const {city} = address
// console.log(city) // kurnool
// but here we are declaring another unwanted variable

// method-2 another name of this method is called nested-level-destructuring
const {address: {city} } = userDetails
// console.log(city)



// destructuring with functions for objects
// method-1
function testDestructuringWithFunctions1 (myObj) {
    // console.log(myObj)
    // for getting name and age from the object using the destructuring
    const {name, age} = myObj
    console.log(name, age)
}
testDestructuringWithFunctions1(userDetails)


// method-2
function testDestructuringWithFunctions2 ({name, age}) {
    console.log(name, age)
}
testDestructuringWithFunctions2(userDetails)

// destructuring with functions for arrays
// method-1
function testDestructuringWithArrays1 (coloursArray) {
    // first color
    const [colour1] = coloursArray
    console.log(colour1) // red
}
testDestructuringWithArrays1(colours)

// method-2
function testDestructuringWithArrays2 ([a, b, c]) {
    console.log(a, b, c)
}
testDestructuringWithArrays2(colours)

// method-3
function testDestructuringWithArrays3 ([a, b,,, d]) {
    console.log(a, b, d)
}
testDestructuringWithArrays3(colours)