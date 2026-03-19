// to get the parent we use 'parentElement'
const a = document.querySelector('.parent1')
console.log(a.parentElement) // here we get the mainParent as the output

const bodyParent = document.querySelector('body').parentElement 
console.log(bodyParent) //html is the body parent of this body

// using the parentElement ✅ not using the parentNode ❌
const htmlParent1 = document.querySelector('html').parentElement
console.log(htmlParent1) // null

// using the parentNode ✅ not using the parentElement ❌
const htmlParent2 = document.querySelector('html').parentNode
console.log(htmlParent2) // document



