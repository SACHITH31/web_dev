// objects

let userDetails: {
    name: string,
    rollNumber: number,
    collegeName: string,
    isStudent: boolean,
    email?: string // here ? means optional which means we can give the value for this or not it won't give any error... where as for the others which we don't use this ? then it is compalsory to give the values to those keys
} = {
    name: 'sachith',
    rollNumber: 514,
    collegeName: 'GPREC',
    isStudent: true
}
console.log(userDetails)
console.log(Object.keys(userDetails))


// nested objects
let allUserDetails: {
    name: string,
    rollNumber: number,
    collegeName: string,
    isStudent: boolean,
    email?: string   
}[] = [
    {
      name: 'sachith',
      rollNumber: 514,
      collegeName: 'GPREC',
      isStudent: true
    }, {
      name: 'abhi',
      rollNumber: 22,
      collegeName: 'unknown',
      isStudent: false
    }, {
      name: 'naveen',
      rollNumber: 22,
      collegeName: 'unknown',
      isStudent: false,
      email: 'naveen@gmail.com'
    }
]

allUserDetails.forEach((userDetail) => {
    console.log('----------------------------')
    console.log("keys are: ", Object.keys(userDetail))
    console.log('user details are: ')
    console.log(userDetail)
})