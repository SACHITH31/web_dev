/*
This file explains how event bubbling and capturing work.

When you click an element, the event does not stay there.

It travels through the DOM in two phases:

1. Capturing phase → from top to target
2. Bubbling phase → from target to top
*/


/*
Selecting elements
*/

let outer = document.getElementById("outer")
let middle = document.getElementById("middle")
let inner = document.getElementById("inner")



/*
1. Bubbling Phase (default behavior)

Event starts from the clicked element and moves upward.
*/

outer.addEventListener("click", function(){
console.log("Outer clicked (bubbling)")
})

middle.addEventListener("click", function(){
console.log("Middle clicked (bubbling)")
})

inner.addEventListener("click", function(){
console.log("Button clicked (bubbling)")
})



/*
When you click the button, output will be:

Button clicked
Middle clicked
Outer clicked

This happens because event bubbles upward.
*/



/*
2. Capturing Phase

To enable capturing, we pass true as third parameter.
*/

outer.addEventListener("click", function(){
console.log("Outer clicked (capturing)")
}, true)

middle.addEventListener("click", function(){
console.log("Middle clicked (capturing)")
}, true)

inner.addEventListener("click", function(){
console.log("Button clicked (capturing)")
}, true)



/*
Now when clicking the button, output will be:

Outer clicked
Middle clicked
Button clicked

Because event travels from top to bottom.
*/



/*
3. stopPropagation()

This method stops the event from moving further.
*/

inner.addEventListener("click", function(event){

event.stopPropagation()

console.log("Button clicked and propagation stopped")

})



/*
Now when button is clicked:

Only this message will print.

Event will not go to parent elements.
*/
