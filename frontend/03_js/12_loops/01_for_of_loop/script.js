const myArr = [1, 2, 3, 4]

for (const arr of myArr) {
    console.log(arr);
} // here we can see the values of the myArr using of loop


const myObj = {
    'name': 'sachith',
    'age': 19,
    'clg': 'GPREC',
    'address': 'kurnool'
}
console.log(myObj);
// for (let temp of myObj) {
//     console.log(temp);
// }  // here we get error as myObj is not iterable 
for (let temp in myObj) {
    console.log(temp, myObj[temp]);
} // as i said 'in' prints the indexes and here the indexes are the keys so we see the keys

const userDatas = Object.entries(myObj)

for (const userData of userDatas) {
    // console.log(userDatas[userData]); // if in
    console.log(userData); // if of
}




console.log('PRINTING INDEXES USING IN LOOP')
for (const data in 'sachith') {
    console.log(data)
}

console.log('PRINTING VALUES USING OF LOOP')
for (const data of 'sachith') {
    console.log(data)
}

// THE MAIN DIFFERENCE BETWEEN THE FOR LOOP AND THIS IS: 
// here automatically a new variable gets created in this for of and for in loop.
// where as in the for loop no new variables gets created instead that particular iterable variable's value gets changed for every loop