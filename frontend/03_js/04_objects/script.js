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


// usage of 'in'
console.log('hello' in myObj) // returns false because hello(key) is not there in myObj 
console.log('firstName' in myObj) // returns true because firstName(key) is in the myObj

// to change the key in an object
let user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};
// 1. Read and assign to the new key
user.userAge = user.age;
// 2. Delete the old key
delete user.age; // deelte returns true or false only 
console.log(user);
// Output: { firstName: 'John', lastName: 'Doe', userAge: 30 }



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


// IMPORTANT NOTES: 
// whenever we add some data to the exsting object then it address won't change instead the particular new value will gets added only into this object
// whenever we add some data into an mulitple leveled object then that particular multi leveled objects address won't gets changes instead the new value gets added only no address gets changed
// when ever we modify the existing value of an key then it's address will gets changed only(REMEMBER it's parent(this particular key-value object) address won't gets changed)
// whenever we modify the name of the object names then that particular object address will gets changes