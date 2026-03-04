const fruits = ['banana', 'apple', 'mango', 'watermelon']

// fruits.forEach((fruit) => {
//     console.log(fruit)
// })


// fruits.forEach(function a (fruit) {
//     console.log(fruit)
// })

// fruits.forEach(function (fruit) {
//     console.log(fruit)
// })


// fruits.forEach(function (fruit, i) {
//     console.log(fruit, i)
// })


// fruits.forEach(function (fruit, i, fruitsList) {
//     console.log(fruit, i, fruitsList)
// })

// Note: we can pass 3 parameters 
// 1st. to access each element
// 2nd. to get the position
// 3rd. will have the total list


fruits.forEach(function (fruit) {
    console.log(fruit)
    return fruit.toUpperCase() // here we won't see the fruit as the upper case and when we try to run this code(line no: 32-35) then we will see undefined even if we keep the return
})