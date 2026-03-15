/*
This JavaScript file explains three important DOM properties:

1. innerText
2. textContent
3. innerHTML

Before using these properties we must first select
the HTML elements from the webpage.
*/


/*
Selecting elements from the DOM using their ID.
*/

let title = document.getElementById("mainTitle")
let visibleText = document.getElementById("visibleText")
let textExample = document.getElementById("textExample")
let htmlBox = document.getElementById("htmlBox")
let button = document.getElementById("runExample")



/*
This event runs when the button is clicked.
Inside this event we will demonstrate all three properties.
*/

button.onclick = function(){

/*
innerText example

innerText reads the text exactly as the user sees it on the webpage.

If some text is hidden using CSS (like display:none),
innerText will ignore that hidden text.
*/

console.log("innerText result:")
console.log(textExample.innerText)



/*
textContent example

textContent reads all the text inside the element.

This includes hidden text that the user cannot see.

textContent reads the raw text stored inside the DOM structure.
*/

console.log("textContent result:")
console.log(textExample.textContent)



/*
innerHTML example

innerHTML returns the HTML structure inside the element.

This includes HTML tags along with the content.
*/

console.log("innerHTML result:")
console.log(htmlBox.innerHTML)



/*
We can also modify content using these properties.
*/


/*
Changing visible text using innerText
*/

visibleText.innerText = "This text was changed using innerText."


/*
Replacing all text using textContent
*/

textExample.textContent = "The original text and hidden text are now replaced using textContent."


/*
Adding new HTML structure using innerHTML
*/

htmlBox.innerHTML = "<h2>This heading was inserted using innerHTML</h2>"

}



/*
Difference between innerText and textContent

innerText
- Returns only visible text
- Ignores hidden elements
- Slower because the browser checks visual layout

textContent
- Returns all text in the DOM
- Includes hidden text
- Faster because it reads raw DOM content

Example situation:

HTML:

<div>
Hello
<span style="display:none">Hidden</span>
</div>

innerText output:

Hello

textContent output:

Hello Hidden
*/
