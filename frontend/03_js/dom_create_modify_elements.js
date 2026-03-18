/*
This file explains how to create, add, remove, and replace elements in the DOM.

These operations are used in real applications like:

- Todo lists
- Chat apps
- Dynamic forms
*/


/*
Selecting required elements
*/

let list = document.getElementById("list")
let addBtn = document.getElementById("addBtn")
let removeBtn = document.getElementById("removeBtn")
let replaceBtn = document.getElementById("replaceBtn")



/*
1. Creating and Adding Elements
*/

addBtn.onclick = function(){

/*
createElement creates a new HTML element.

Here we create a new <li> element.
*/

let newItem = document.createElement("li")



/*
textContent adds text inside the element.
*/

newItem.textContent = "New Item"



/*
appendChild adds the element at the end of the parent.
*/

list.appendChild(newItem)

}



/*
2. Removing Elements
*/

removeBtn.onclick = function(){

/*
lastElementChild gives the last item in the list.
*/

let lastItem = list.lastElementChild



/*
remove() deletes that element from the DOM.
*/

if(lastItem){
lastItem.remove()
}

}



/*
3. Replacing Elements
*/

replaceBtn.onclick = function(){

/*
firstElementChild gives the first item in the list.
*/

let firstItem = list.firstElementChild



/*
Create a new element to replace the old one.
*/

let newItem = document.createElement("li")
newItem.textContent = "Replaced Item"



/*
replaceWith replaces the old element with the new one.
*/

if(firstItem){
firstItem.replaceWith(newItem)
}

}



/*
4. Other Useful Methods

append()
- adds element at the end

prepend()
- adds element at the beginning

before()
- adds element before a specific element

after()
- adds element after a specific element
*/
