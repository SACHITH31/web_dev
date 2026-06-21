// enum is a way to define a group of related constants
// instead of writing random values everywhere, in your code, you group them under one name.

// IF SOMETHING HAS FIXED POSSIBLE VALUES, WE USE AN ENUM.



// without using this enums
let status1 = 'Pending' // here different users can write this Pendings as (pendings or else PENDINGS), but both these are not equal to Pending which is real so we use enum here.
// with enum
enum status2 {
    Pending,
    Completed,
    Failed
}
let orderStatus1: status2 = status2.Pending
let orderStatus2: status2 = status2.Completed
let orderStatus3: status2 = status2.Failed
console.log(orderStatus1) //0
console.log(orderStatus2) //1
console.log(orderStatus3) //2
// here any user can use this status2.Pending instead of writing the pendings, PENDINGS, like that which avoids the errors

// basic enum examples:
enum Directions {
    Up, //0
    Down, //1
    Left, //2
    Right //3
}


// custom numeric values
enum customDirections {
    up = 10,
    down,
    left,
    right
}
console.log('------------------')
console.log(customDirections.up)
console.log(customDirections.down)
console.log(customDirections.left)
console.log(customDirections.right)



// real code for the status
enum status  {
    pendings = 'PENDINGS',
    completed = 'COMPLETED',
    failed = 'FAILED'
}
console.log('---------------')
console.log(status.pendings)
console.log(status.completed)
console.log(status.failed)
