/*
===========================================================
DOM SELECTING ELEMENTS - COMPLETE EXPLANATION
===========================================================

In JavaScript, DOM selection means:

Selecting HTML elements so that JavaScript can read or modify them.

Example actions after selecting elements:

• Change text
• Change style
• Add elements
• Remove elements
• Handle events

All DOM selection starts from the "document" object.

document = root object representing the webpage.
*/


/*
===========================================================
1. getElementById()
===========================================================

This method selects a SINGLE element using its ID.

Syntax:

document.getElementById("id_name")

Important rules:

• ID must be unique in the page.
• This method returns ONE element only.
*/


let title = document.getElementById("main-title")

console.log("getElementById result:")
console.log(title)


/*
Accessing properties of the selected element
*/

console.log(title.textContent)


/*
Changing content using JavaScript
*/

title.textContent = "Learning DOM Selection Deeply"



/*
===========================================================
2. getElementsByClassName()
===========================================================

This method selects elements using CLASS.

Syntax:

document.getElementsByClassName("class_name")

Important:

• Returns an HTMLCollection
• HTMLCollection behaves like an array
• But it is NOT a real array
• Multiple elements can have same class
*/

let descriptions = document.getElementsByClassName("description")

console.log("getElementsByClassName result:")
console.log(descriptions)


/*
Accessing elements from the collection

Index starts from 0
*/

console.log(descriptions[0])
console.log(descriptions[1])


/*
Looping through class elements
*/

for(let i = 0; i < descriptions.length; i++)
{
    console.log(descriptions[i].textContent)
}



/*
===========================================================
3. getElementsByTagName()
===========================================================

This selects elements based on the HTML tag.

Syntax:

document.getElementsByTagName("tagname")

Example:

p
div
li
h1
*/

let paragraphs = document.getElementsByTagName("p")

console.log("getElementsByTagName result:")
console.log(paragraphs)



/*
===========================================================
4. querySelector()
===========================================================

querySelector selects the FIRST matching element.

Syntax:

document.querySelector("CSS selector")

This method uses CSS selectors.

Examples:

#id
.class
tag
div p
ul li
*/

let firstFruit = document.querySelector(".fruit")

console.log("querySelector result:")
console.log(firstFruit)



/*
===========================================================
5. querySelectorAll()
===========================================================

This method selects ALL matching elements.

Syntax:

document.querySelectorAll("CSS selector")

Returns:

NodeList

NodeList is similar to an array.
*/

let fruits = document.querySelectorAll(".fruit")

console.log("querySelectorAll result:")
console.log(fruits)



/*
Loop through NodeList
*/

for(let i = 0; i < fruits.length; i++)
{
    console.log(fruits[i].textContent)
}



/*
===========================================================
6. Selecting Elements Inside Other Elements
===========================================================

You can also select elements INSIDE a specific container.

Example:

div.querySelector()
*/

let container = document.getElementById("container")

let insideTitle = container.querySelector(".section-title")

console.log("Selecting inside container:")
console.log(insideTitle)



/*
===========================================================
7. Selecting Buttons
===========================================================

Buttons are commonly selected for event handling.
*/

let button = document.getElementById("btn")

console.log(button)



/*
===========================================================
Summary of DOM Selection Methods
===========================================================

1. getElementById()
   → returns single element

2. getElementsByClassName()
   → returns HTMLCollection

3. getElementsByTagName()
   → returns HTMLCollection

4. querySelector()
   → returns FIRST matching element

5. querySelectorAll()
   → returns NodeList

Most modern developers prefer:

querySelector
querySelectorAll

because they support CSS selectors.
*/
