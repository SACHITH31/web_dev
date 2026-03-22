/*
This file explains how to create elements using JavaScript.

We will focus only on:

- createElement()
- adding content
- inserting into DOM
*/


/*
Selecting required elements
*/

let container = document.getElementById("container")
let button = document.getElementById("createBtn")



/*
This runs when button is clicked
*/

button.onclick = function(){

/*
1. Creating a new element

createElement creates a new HTML element in memory.
It is NOT visible on the page yet.
*/

let newDiv = document.createElement("div")



/*
2. Adding text to the element

textContent adds plain text inside the element.
*/

newDiv.textContent = "This is a newly created div element."



/*
3. Styling the element

We can style the element before adding it to the page.
*/

newDiv.style.backgroundColor = "lightblue"
newDiv.style.padding = "10px"
newDiv.style.margin = "10px 0"



/*
4. Adding element to the DOM

appendChild adds the element inside the container.
Now it becomes visible on the webpage.
*/

container.appendChild(newDiv)

}



/*
Important understanding:

createElement only creates the element in memory.

appendChild (or append) is required to actually display it on the page.

Without appending, the element will not appear.
*/
