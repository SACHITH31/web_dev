// this arguments concept won't work in ARROW FUNCTIONS
// it looks like array like but it is not an array. How can we say? Ans: because we can't apply the array methods like map, reduce, fiter, forEach
// we can apply the length method and also we can implement the for loop

function add (a, b) {
    console.log(arguments)
    console.log(arguments[0])
    console.log(arguments[1])
    console.log(arguments.length)
}

// add(1, 2, 3)
// add(1, 2, 3, 4, 5, 6)
// add(1, 2, 3, 4, 5, 6, 7, 8)
