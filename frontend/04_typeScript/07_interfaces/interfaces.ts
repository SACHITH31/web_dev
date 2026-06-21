
// why do we use this interfaces ? because we can create our own datatypes for example in the example studentDetails is one of the example of creating our own data types
interface studentDetails {
    studentName : string,
    studentId : number
    studentEmail? : string
}

let student1 : studentDetails = {
    studentName : 'sachith',
    studentId : 514,
}
console.log(student1)


interface projectDetails {
    projectName : string,
    projectId : number,
    projectManager : string,
    projectStack : string[],
    projectFeatures: {
        featureName : string,
        featureDescription : string
    }[]
}

let myProject : projectDetails = {
    projectName : 'My Project',
    projectId : 123,
    projectManager : 'sachith',
    projectStack : ['React', 'TypeScript'],
    projectFeatures: [
        {
            featureName: 'User Authentication',
            featureDescription: 'Handles user login and registration'
        },
        {
            featureName: 'Dashboard',
            featureDescription: 'Provides an overview of user data'
        }
    ]
}
console.log(myProject.projectFeatures[0]?.featureName) // User Authentication
// in js or ts if we try to access a property of something that is null or undefined then it will give an error, but here we use ? which is called optional chaining which means if this projectFeatures[0] is null or undefined then it won't give any error instead it will return undefined instead of giving an error.  
console.log(myProject.projectFeatures[12]?.featureName) // undefined because there is no projectFeatures[12] but it won't give any error because we use optional chaining here.
