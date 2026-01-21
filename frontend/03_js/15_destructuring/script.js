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





const userDetails = {
    'name': 'sachith',
    'age': 19,
    'address': {
        city: 'kurnool',
        state: 'andhra pradesh'
    }
}


