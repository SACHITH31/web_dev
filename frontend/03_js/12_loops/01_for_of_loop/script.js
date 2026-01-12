const myArr = [1, 2, 3, 4]

for (const arr of myArr) {
    console.log(arr);
} // here we can see the values of the myArr using of loop


const myObj = {
    'name': 'sachith',
    'age': 19,
    'clg': 'GPREC',
    'address': {
        'city': 'kurnool',
        'state': 'andhra pradesh'
    }
}
console.log(myObj);
// for (let temp of myObj) {
//     console.log(temp);
// }  // here we get error as myObj is not iterable 
for (let temp in myObj) {
    console.log(temp, myObj[temp]);
} // as i said 'in' prints the indexes and here the indexes are the keys so we see the keys


// THE MAIN DIFFERENCE BETWEEN THE FOR LOOP AND THIS IS: 
// here automatically a new variable gets created in this for of and for in loop.
// where as in the for loop no new variables gets created instead that particular iterable variable's value gets changed for every loop