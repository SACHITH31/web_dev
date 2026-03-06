
// the use of this spread operator is to spread the strings, arrays, etc..,,
// IT WON'T BE USED AS PASSING AS THE PARAMETER TO A FUNCTION(function add(a, b) here a and b are parameters)
const nums1 = [1, 2, 3, 4]
const nums2 = [5, 6, 7, 8, 9]

// method-1 to concat the numbers using concat operation
const joinedArray1 = nums1.concat(nums2) 

// method-2 to concat the numbers using spread operator
const name = 'sachith'
const joinedArray2 = [...nums1, ...nums2, ...name]


// method-3 using spread operator
// const myName = 'sachith'
// const joinedArray3 = [...nums1, ...nums2, ...myName] // output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 's', 'a', 'c', 'h', 'i', 't', 'h']
// // console.log(joinedArray3[0]) // output: 1

// function add (...joinedArray) {
//     let sum = 0
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }
//     console.log(sum)
// }
// add(...joinedArray2)
