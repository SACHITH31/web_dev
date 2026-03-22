/*
This file explains different ways to insert elements in the DOM.

We will learn:

- append()
- prepend()
- before()
- after()

These methods control where a new element is placed.
*/


/*
Selecting elements
*/

let container = document.getElementById("container")
let reference = document.getElementById("reference")

let appendBtn = document.getElementById("appendBtn")
let prependBtn = document.getElementById("prependBtn")
let beforeBtn = document.getElementById("beforeBtn")
let afterBtn = document.getElementById("afterBtn")




let sampleBtn = document.querySelector('.sampleBtn')

sampleBtn.addEventListener('click', () => {
    const experiment1 = document.createElement(true ?'small': 'p')
    const experiment2 = document.createElement(Option ?'div': 'p')
    console.log(Boolean(Option)) // true 
    const experiment3 = document.createElement(false ? 'h1': 'small')
    console.log(experiment1)
    console.log(experiment2)
    console.log(experiment3)

    const div = document.createElement('div')
    div.innerText = 'this is div'
    container.append(div)
})



/*
Function to create a new element

We create a fresh element every time so we can see multiple insertions.
*/

function createElement(text){

let el = document.createElement("p")
el.textContent = text
el.style.backgroundColor = "lightgreen"
el.style.padding = "5px"
el.style.margin = "5px"

return el
}



/*
1. append()

Adds element at the END of the parent container.
*/

appendBtn.onclick = function(){

let el = createElement("Added using append()")

container.append(el)

}



/*
2. prepend()

Adds element at the BEGINNING of the parent container.
*/

prependBtn.onclick = function(){

let el = createElement("Added using prepend()")

container.prepend(el)

}



/*
3. before()

Adds element BEFORE the reference element.
*/

beforeBtn.onclick = function(){

let el = createElement("Added using before()")

reference.before(el)

}



/*
4. after()

Adds element AFTER the reference element.
*/

afterBtn.onclick = function(){

let el = createElement("Added using after()")

reference.after(el)

}



/*
Understanding positions:

container
 ├── prepend() → adds here (top)
 ├── existing elements
 └── append() → adds here (bottom)

reference element
 ├── before() → adds above it
 └── after() → adds below it
*/
