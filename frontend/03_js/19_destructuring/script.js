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


/****************************************************************************************
OBJECT DESTRUCTURING IN JAVASCRIPT (BASICS)

What is Object Destructuring?

Normally when we want values from an object we do this:

const user = {
    name: "Sachith",
    age: 19,
    city: "Kurnool"
}

console.log(user.name)
console.log(user.age)

This works fine but it becomes repetitive if the object has many properties.

So JavaScript introduced DESTRUCTURING.

Definition:
Object destructuring means extracting values from an object and storing them
directly into variables.

Syntax:

const {property1, property2} = object

Example:
***************************************************************************************/

const user12 = {
    name: "Sachith",
    age1: 19,
    city: "Kurnool"
}

const {name, age1, city} = user

console.log(name) // Sachith
console.log(age1)  // 19
console.log(city) // Kurnool


/****************************************************************************************
How it works internally

JavaScript matches the property names with variable names.

Object:
{
   name: "Sachith",
   age: 19
}

Destructuring:

const {name, age} = user

JS reads it like this internally:

const name = user.name
const age = user.age
****************************************************************************************/


/****************************************************************************************
IMPORTANT RULE

Variable name must match property name.

Example:
****************************************************************************************/

const person = {
    firstName: "Sachith",
    lastName: "Kasa"
}

const {firstName, lastName} = person

console.log(firstName) // Sachith
console.log(lastName)  // Kasa


/****************************************************************************************
What happens if the property does not exist?

****************************************************************************************/

const student = {
    name: "Sachith",
    age: 19
}

const {name: studentName, grade} = student

console.log(studentName) // Sachith
console.log(grade)       // undefined


/****************************************************************************************
RENAMING VARIABLES

Sometimes we want a different variable name.

Syntax:

const {property: newVariableName} = object

Example:
****************************************************************************************/

const user1 = {
    name: "Sachith",
    age: 19
}

const {name: username} = user1

console.log(username) // Sachith


/****************************************************************************************
DEFAULT VALUES

If a property does not exist we can give a default value.

Syntax:

const {property = defaultValue} = object

Example:
****************************************************************************************/

const user2 = {
    name: "Sachith"
}

const {name: userName, age: userAge = 18} = user2

console.log(userName) // Sachith
console.log(userAge)  // 18


/****************************************************************************************
DESTRUCTURING DURING DECLARATION

We can destructure directly while creating variables.

****************************************************************************************/

const product = {
    title: "Laptop",
    price: 50000
}

const {title, price} = product

console.log(title)
console.log(price)


/****************************************************************************************
SUMMARY (VERY IMPORTANT)

Object Destructuring helps to:

1. Extract object properties easily
2. Write cleaner code
3. Avoid repeating object.property many times
4. Rename variables
5. Set default values

Basic Syntax:

const {property1, property2} = object
****************************************************************************************/




















