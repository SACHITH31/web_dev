let name = 'rickyBroo'

let myObj = {
    firstName: 'sachith',
    'last-Name': 'kasa',
    'full-name': 'sachith' + 'kasa',
    22: 'rollNumber', // 22 type is string here
    section: 3, // 3 type is number only
    address: {
        state: 'Andhra Pradesh',
        village: 'loddipalle',
        district: 'kurnool'
    }
}

// accessing the values
let firstNameContainer = myObj.firstName // dot notation
let lastNameContainer = myObj['last-Name'] // bracket notation

let keys = Object.keys(myObj)
let values = Object.values(myObj)

// to find the length of the objects
console.log(Object.keys(myObj).length)

const c = Object.keys(myObj.address)
console.log(c.length);

// dynamically adding the value
myObj.addedValue = '123'
myObj['added-Value1'] = '123'

// to get the key and values
const d = Object.entries(myObj)
console.log(d[0]); // ['22', 'rollNumber']
console.log(d[0][0]); // 22


// Objects store references to nested objects, not copies. The parent object holds memory addresses (pointers) to child objects.
//          EXAMPLE: 
// Parent: { child1: [address1], child2: [address2] }
// Change child1 → only child1 updates (same address)
// Parent unchanged

// Modifying a nested object changes the original because both parent and code point to the same memory location.