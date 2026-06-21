// tuples

let myTuple: [string, number, string, number] = ['naruto', 2, 'obito', 4] // here we can't add any extra values. and we keep the values in this tuple according to the data types as we specified only.
console.log(myTuple)
// destructuring
let [name1, id1, name2, id2] = myTuple
console.log(name1, id1)
console.log(name2, id2)


// nested arrays in the tuples
let userDetails: [string, string, number, boolean][] = [
    ['Google', 'abc', 123, true],
    ['Microsoft', 'def', 456, false],
    ['FB', 'ghi', 789, true]
]
userDetails.forEach((userDetail) => {
    let [workingAt, name, id, isWorking] = userDetail
    console.log('-----------------')
    console.log(workingAt)
    console.log(name)
    console.log(id)
    console.log(isWorking)
})
