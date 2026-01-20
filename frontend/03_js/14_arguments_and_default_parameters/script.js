// this arguments concept won't work in ARROW FUNCTIONS
// it looks like array like but it is not an array. How can we say? Ans: because we can't apply the array methods like map, reduce, fiter, forEach
// we can apply the length method and also we can implement the for loop

function add1 (a, b) {
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments.length)
}

// add1(1, 2, 3)
// add1(1, 2, 3, 4, 5, 6)
// add1(1, 2, 3, 4, 5, 6, 7, 8)


// TYPES TO WRITE THE FUNCTIONS 
const add2 = function () {
    console.log(arguments)
}

// ARROW FUNCTIONS 
const add3 = () => { // WHEN WE CALL THIS THEN WE WILL GET THE ERROR AS THE ARGUMENTS IS NOT DEFINED BECAUSE THIS ARROW FUNCTION IS NEW ONE AND WHERE AS THIS ARGUMENTS IS OLDER ONE
                     // THE ALTERNATIVE OF THIS ARGUMENTS IS REST PARAMETER.
    console.log(arguments)
}

