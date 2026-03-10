/****************************************************************************************
OBJECT DESTRUCTURING IN JAVASCRIPT (ADVANCED CONCEPTS)

Now we will see advanced cases that are used in real projects.
****************************************************************************************/


/****************************************************************************************
1️⃣ DESTRUCTURING NESTED OBJECTS

Sometimes objects contain another object inside them.

Example:
****************************************************************************************/

const user = {
    name: "Sachith",
    address: {
        city: "Kurnool",
        state: "Andhra Pradesh"
    }
}

const {address} = user

console.log(address.city)


/****************************************************************************************
Direct nested destructuring
****************************************************************************************/

const {address: {city, state}} = user

console.log(city)
console.log(state)


/****************************************************************************************
2️⃣ MULTIPLE LEVEL NESTED OBJECT

****************************************************************************************/

const company = {
    name: "Google",
    location: {
        country: "USA",
        office: {
            floor: 5
        }
    }
}

const {location: {office: {floor}}} = company

console.log(floor) // 5


/****************************************************************************************
3️⃣ DESTRUCTURING IN FUNCTION PARAMETERS

This is VERY COMMON in React and Node.js.

Example without destructuring:
****************************************************************************************/

const user1 = {
    name: "Sachith",
    age: 19
}

function printUser(data){
    console.log(data.name)
    console.log(data.age)
}

printUser(user1)


/****************************************************************************************
Example WITH destructuring
****************************************************************************************/

function printUserDetails({name, age}){
    console.log(name)
    console.log(age)
}

printUserDetails(user1)


/****************************************************************************************
4️⃣ REST OPERATOR WITH OBJECT DESTRUCTURING

Sometimes we want some properties and the rest separately.

Example:
****************************************************************************************/

const student = {
    name: "Sachith",
    age: 19,
    city: "Kurnool",
    course: "CSE"
}

const {name, age, ...rest} = student

console.log(name) // Sachith
console.log(age)  // 19
console.log(rest) // remaining properties


/****************************************************************************************
5️⃣ USING DESTRUCTURING IN LOOPS
****************************************************************************************/

const users = [
    {name: "A", age: 20},
    {name: "B", age: 22},
    {name: "C", age: 25}
]

for(const {name, age} of users){
    console.log(name, age)
}


/****************************************************************************************
6️⃣ DESTRUCTURING RETURN VALUES FROM FUNCTIONS
****************************************************************************************/

function getUser(){
    return {
        name: "Sachith",
        age: 19
    }
}

const {name: userName, age: userAge} = getUser()

console.log(userName)
console.log(userAge)


/****************************************************************************************
7️⃣ REAL WORLD EXAMPLE (API RESPONSE)

Example API response:
****************************************************************************************/

const response = {
    status: 200,
    data: {
        username: "Sachith",
        followers: 120
    }
}

const {data: {username, followers}} = response

console.log(username)
console.log(followers)


/****************************************************************************************
COMMON MISTAKE (IMPORTANT)

****************************************************************************************/

const user2 = {
    name2: "Sachith"
}

const {name1} = user2

console.log(name1) // undefined

// Why?
// Because property name2 is "name2" not "name1"
// Correct way:
const {name2} = user2


/****************************************************************************************
FINAL SUMMARY

Object destructuring allows you to:

✔ Extract properties from objects
✔ Rename variables
✔ Use default values
✔ Work with nested objects
✔ Use inside functions
✔ Extract API responses
✔ Use rest operator

Mastering this concept will make your JavaScript code much cleaner and
professional.
****************************************************************************************/
