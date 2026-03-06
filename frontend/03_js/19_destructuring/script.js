// destructuring
// BY USING THIS DESCTRUCTRING CONCEPT WE ARE NOT CREATING THE ARRAY.

// 1️_ destructuring for arrays
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


// 2️⃣_destructuring for objects
const user = {
    name: 'sachith',
    age: 19,
    address: {
        city: 'kurnool',
        state: 'ap'
    }
}

// without desctructuring concept 
// const userName = user['name']
// const userAge = user['age']

// with using the desctructuring concept
const {name1, age} = user
console.log(name1) // undefined (here we get the undefined because here this name1 is not found in the user object so we get undefined, but what if i want to store that user.name in this name1 variable ??🤔🤔...then see line no: 48)
console.log(age) // 19 (here we get the required output because age is present in the user object)

const {name: name2} = user
console.log(name2) // sachith (here we get the required output... the syntax is: {key_in_main_object: where_we_want_store_that_particularKeyValue})
