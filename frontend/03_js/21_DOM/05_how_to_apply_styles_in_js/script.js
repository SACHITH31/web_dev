// In JavaScript, you can apply styles to HTML elements using the DOM style property.

// Basically, you:
// 1️⃣Select the element
// 2️⃣Use .style
// 3️⃣Set the CSS property



const text = document.getElementById("text")
text.style.color = "blue"
text.style.backgroundColor = "yellow"
text.style.fontSize = "30px"

// | CSS property       | JavaScript property |
// | ------------------ | ------------------- |
// | `background-color` | `backgroundColor`   |
// | `font-size`        | `fontSize`          |
// | `text-align`       | `textAlign`         |


const btn = document.getElementById("btn")
btn.onclick = function () {
    text.style.color = "white"
    text.style.backgroundColor = "red"
    text.style.padding = "10px"
}


// applying inline styles using the setAttribute
const text1 = document.getElementById("text1")
text1.setAttribute("style", "color:red; font-size:40px")