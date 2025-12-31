const myName = 'sachith'

const myArr = [
    'apple', 
    'grapes', 
    'mango', 
    'watermelon',
    {
        'firstName': 'sachith',
        'details': {
            lastName: 'kasa'
        }
    },
    [1, 2],
    true,
    undefined,
    null,
    function myFun () {
        console.log('Hello From Function inside the array')
    }
]

console.log(myArr[11])

myArr[13] = '133'
console.log('From myArr[13]' + myArr[13])
console.log('From myArr[11]' + myArr[11])
console.log(myArr.length) // 14 (because we added the value at 13 right)


// adding the elements at last
myArr.push('orange1') // when we console this, then this will return the new length of our array
myArr.push('orange2', 22, undefined, null)

// deleting the last element
// when we use pop() it is to keep it in a variable 
let a = myArr.pop() // deletes the last element 
console.log(a) // shows which element is deleted