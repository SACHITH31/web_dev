// selecting elements are: 
// 1. document.getElementById
// 2. document.getElementsByClassName
// 3.document.querySelector
// 4.document.querySelectorAll
// 5. document.getElementsByTagName

// setAttribute syntax: variable.setAttribute('name', 'value') // name = class or id(approx) value means what should be the class name
// getAttribute syntax: variable.getAttribute('name') // where name is like class, id, title or etc..,

const userName = document.querySelector('.userName')
const password = document.querySelector('.password')
const submitButton = document.querySelector('.submitButton')

const showResults = document.querySelector('.showResults')

submitButton.addEventListener('click', () => {
    showResults.innerHTML = '';

    console.log(showResults.getAttribute('class'))
    
    const userNameTag = document.createElement('p')
    userNameTag.setAttribute('class', 'userName')
    const passwordTag = document.createElement('p')

    userNameTag.innerText = userName.value
    passwordTag.innerText = password.value

    showResults.append(userNameTag)
})
