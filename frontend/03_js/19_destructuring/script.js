// destructuring
// BY USING THIS DESCTRUCTRING CONCEPT WE ARE NOT CREATING THE ARRAY.

// destructuring for arrays
const myColours = ['red', 'yellow', 'black', 'white', 'orange'] // total 5 colours

//// without using the destructuring concept.. see the below codes which are the examples without using the destructuring
// const myColour1 = myColours[0]
// const myColour2 = myColours[1]
// const myColour3 = myColours[2]
// const myColour4 = myColours[3]
// console.log(myColours1) // red
// console.log(myColours2) // yellow
// console.log(myColours3) // black
// console.log(myColours4) // white

// with destructuring concept
const [colour1, colour2, colour3, colour4] = myColours
console.log(colour1) // red
console.log(colour2) // yellow
console.log(colour3) // black
console.log(colour4) // white

// skipping 
// well if we want only the third colour only while desctructuring then we use this skipping,
const [,,thirdColour] = myColours
console.log(thirdColour) // black