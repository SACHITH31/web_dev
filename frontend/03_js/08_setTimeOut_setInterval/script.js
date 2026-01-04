// we should not call a function in the setTimeout because it won't implement async ability instead it implement sync ability 
// so to avoid this we just keep the function name only no function call
setTimeout(a(), 5000)

function a () {
    console.log('Hello function');
}
