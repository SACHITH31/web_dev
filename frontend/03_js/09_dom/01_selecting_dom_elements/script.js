// selecting elements are: 
// 1. document.getElementById
// 2. document.getElementsByClassName
// 3.document.querySelector
// 4.document.querySelectorAll
// 5. document.getElementsByTagName

const userName = document.querySelector('.userName')
const password = document.querySelector('.password')
const submitButton = document.querySelector('.submitButton')

const showResults = document.querySelector('.showResults')

submitButton.addEventListener('click', () => {
    showResults.innerHTML = '';
    const userNameTag = document.createElement('p')
    const passwordTag = document.createElement('p')

    userNameTag.innerText = userName.value
    passwordTag.innerText = password.value

    showResults.append(userNameTag)
})
