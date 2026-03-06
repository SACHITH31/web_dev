// rest parameter is used for only the parameter purposes only 
// rest parameter always returns an [](array)

const myNums = [1, 2, 3, 4]

// // useCase-1
// function add (...nums) {
//     console.log(nums)
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum
// }
// const a = add(...myNums)


// // useCase-2
// function add (a, b, ...nums) {
//     console.log(a, b) // 1 2
//     console.log(nums) // [3, 4]
//     let sum = 0
//     for (let i = 0; i < nums.length; i++) {
//         sum += nums[i]
//     }
//     return sum
// }
// const a = add(...myNums)



// ❌❌useCase-3
// function add (...nums, a, b) { // ALWAYS THE REST PARAMETER SHOULD BE AT LAST ONLY IT SHOULD NOT IN THE STARTING🙂🙂
// }
// const a = add(...myNums)


// // useCase-4
// function add (a, b, c, d, ...nums) {
//     console.log(a, b, c, d) // 1 2 3 4
//     console.log(nums) // []
// }
// const a = add(...myNums)

const myNums1 = [1, 2]

// // useCase-5
// function add (a, b, c, d, ...nums) {
//     console.log(a, b) // 1 2
//     console.log(c, d) // undefined undefined
//     console.log(nums) // []
// }
// const a = add(...myNums1)
