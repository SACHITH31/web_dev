/*
This JavaScript file demonstrates how to move through the DOM tree.

Three relationships are important:

1. Parent
2. Children
3. Siblings

DOM traversal helps us move from one element to another
without selecting elements again from the document.
*/


/*
Selecting elements needed for traversal examples.
*/

let banana = document.getElementById("banana")
let fruitList = document.getElementById("fruitList")
let button = document.getElementById("runTraversal")



/*
Running examples when the button is clicked.
*/

button.onclick = function(){



/*
Accessing Parent Element

Every element inside HTML has a parent element.

Example:

li → parent is ul

We can access the parent using:

parentElement
*/

let parent = banana.parentElement

console.log("Parent Element:")
console.log(parent)



/*
Accessing Children Elements

A parent element can have multiple children.

Example:

ul → children are li elements.

Property used:

children
*/

let children = fruitList.children

console.log("Children Elements:")
console.log(children)



/*
Accessing First Child Element

We can directly access the first child.

Property:

firstElementChild
*/

let firstFruit = fruitList.firstElementChild

console.log("First Child:")
console.log(firstFruit)



/*
Accessing Last Child Element

Property:

lastElementChild
*/

let lastFruit = fruitList.lastElementChild

console.log("Last Child:")
console.log(lastFruit)



/*
Accessing Next Sibling

Sibling means elements that share the same parent.

Example:

Apple, Banana, Orange are siblings.

Property:

nextElementSibling
*/

let nextFruit = banana.nextElementSibling

console.log("Next Sibling:")
console.log(nextFruit)



/*
Accessing Previous Sibling

Property:

previousElementSibling
*/

let previousFruit = banana.previousElementSibling

console.log("Previous Sibling:")
console.log(previousFruit)

}
