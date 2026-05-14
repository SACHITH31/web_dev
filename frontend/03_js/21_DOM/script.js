/*
This file explains how to handle events in JavaScript.

Event = user action like click, typing, mouse movement.

We use events to make web pages interactive.
*/


/*
Selecting elements
*/

let button = document.getElementById("clickBtn")
let input = document.getElementById("nameInput")
let output = document.getElementById("output")
let box = document.getElementById("box")



/*
1. Click Event using addEventListener

This runs when the button is clicked.

addEventListener is the modern and best way to handle events.
*/

button.addEventListener("click", function(){

/*
When button is clicked, we change text inside the paragraph.
*/

output.textContent = "Button was clicked!"

})



/*
2. Input Event

This runs every time the user types something in the input box.
*/

input.addEventListener("input", function(){

/*
event.target gives the element that triggered the event.
value gives what the user typed.
*/

output.textContent = "You typed: " + input.value

})



/*
3. Mouse Events

mouseover → when mouse enters the element
mouseout → when mouse leaves the element
*/

box.addEventListener("mouseover", function(){

box.style.backgroundColor = "lightgreen"

})

box.addEventListener("mouseout", function(){

box.style.backgroundColor = "lightgray"

})



/*
4. Keyboard Event

keydown runs when a key is pressed.
*/

input.addEventListener("keydown", function(){

console.log("Key pressed")

})



/*
Important understanding:

addEventListener allows multiple events on same element.

Example:
You can add many click events on same button.

This is better than using onclick.
*/
