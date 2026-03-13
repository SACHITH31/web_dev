# DOM Selecting Elements – Complete Detailed Guide

This document explains **DOM element selection in JavaScript in very deep detail**.  
It serves as a **reference guide** for understanding how JavaScript accesses HTML elements.

---

# 1. What is DOM?

DOM stands for **Document Object Model**.

When a browser loads an HTML page, it converts the HTML document into a **tree-like structure of objects**.

Each HTML element becomes an **object (node)** that JavaScript can access and manipulate.

Example HTML:

```html
<body>
  <h1>Hello</h1>
  <p>Welcome</p>
</body>
```

DOM Tree:

```
document
 └── html
      └── body
           ├── h1
           └── p
```

JavaScript interacts with this structure using the **document object**.

---

# 2. Why DOM Element Selection is Important

JavaScript must first **select an element** before it can modify it.

Example actions JavaScript can perform after selecting elements:

• Change text content  
• Change CSS styles  
• Add new elements  
• Remove elements  
• Handle events (click, hover, etc.)  
• Build dynamic interfaces

Example:

```javascript
document.getElementById("title").textContent = "New Title"
```

---

# 3. The `document` Object

The **document object** represents the entire webpage.

It is the **entry point** to the DOM.

Example:

```javascript
console.log(document)
```

This prints the entire DOM structure in the browser console.

All DOM selection methods start with:

```
document
```

---

# 4. DOM Selection Methods

JavaScript provides multiple methods to select elements.

Main methods:

1. getElementById()
2. getElementsByClassName()
3. getElementsByTagName()
4. querySelector()
5. querySelectorAll()

---

# 5. getElementById()

This method selects **one element using its ID**.

IDs must be **unique** in HTML.

Syntax:

```javascript
document.getElementById("id_name")
```

Example:

```html
<h1 id="title">Hello</h1>
```

```javascript
let element = document.getElementById("title")
```

Result:

```
<h1 id="title">Hello</h1>
```

Properties of returned element:

```
element.textContent
element.innerHTML
element.style
```

Example modification:

```javascript
element.textContent = "DOM Learning"
```

---

# 6. getElementsByClassName()

Selects elements using **class name**.

Syntax:

```javascript
document.getElementsByClassName("class_name")
```

Example HTML:

```html
<p class="info">Paragraph 1</p>
<p class="info">Paragraph 2</p>
```

JavaScript:

```javascript
let elements = document.getElementsByClassName("info")
```

Result:

```
HTMLCollection(2)
```

Example access:

```javascript
elements[0]
elements[1]
```

Looping example:

```javascript
for(let i = 0; i < elements.length; i++){
 console.log(elements[i].textContent)
}
```

Important characteristics:

• returns **HTMLCollection**  
• HTMLCollection is **array-like**  
• index starts from **0**

---

# 7. getElementsByTagName()

Selects elements based on **HTML tag name**.

Syntax:

```javascript
document.getElementsByTagName("tagname")
```

Example:

```html
<p>First</p>
<p>Second</p>
```

JavaScript:

```javascript
let paragraphs = document.getElementsByTagName("p")
```

Result:

```
HTMLCollection
```

Access example:

```javascript
paragraphs[0]
paragraphs[1]
```

Loop example:

```javascript
for(let i=0;i<paragraphs.length;i++){
 console.log(paragraphs[i])
}
```

---

# 8. querySelector()

Selects **the first matching element** using **CSS selectors**.

Syntax:

```javascript
document.querySelector("CSS_SELECTOR")
```

Examples:

### Select ID

```javascript
document.querySelector("#title")
```

### Select Class

```javascript
document.querySelector(".info")
```

### Select Tag

```javascript
document.querySelector("p")
```

### Select Nested Element

```javascript
document.querySelector("div p")
```

Important:

```
Returns ONLY the first matching element
```

---

# 9. querySelectorAll()

Selects **all matching elements**.

Syntax:

```javascript
document.querySelectorAll("CSS_SELECTOR")
```

Example:

```javascript
let fruits = document.querySelectorAll(".fruit")
```

Returns:

```
NodeList
```

Access example:

```javascript
fruits[0]
fruits[1]
fruits[2]
```

Loop example:

```javascript
for(let i=0;i<fruits.length;i++){
 console.log(fruits[i].textContent)
}
```

---

# 10. Selecting Elements Inside Other Elements

You can select elements **inside a container element**.

Example HTML:

```html
<div id="container">
 <p class="text">Hello</p>
</div>
```

JavaScript:

```javascript
let container = document.getElementById("container")

let text = container.querySelector(".text")
```

This limits the search **inside that element only**.

---

# 11. HTMLCollection vs NodeList

## HTMLCollection

Returned by:

```
getElementsByClassName()
getElementsByTagName()
```

Properties:

• array-like  
• live collection  
• updates automatically if DOM changes

---

## NodeList

Returned by:

```
querySelectorAll()
```

Properties:

• static collection  
• easier iteration  
• does not update automatically

---

# 12. Accessing Element Content

After selecting an element, you can access or change its content.

Common properties:

### textContent

Returns only text.

```javascript
element.textContent
```

### innerHTML

Returns HTML inside element.

```javascript
element.innerHTML
```

Example:

```javascript
element.innerHTML = "<b>Hello</b>"
```

---

# 13. Changing Element Style

Example:

```javascript
element.style.color = "red"
element.style.fontSize = "30px"
```

---

# 14. Attaching Events to Elements

Example button:

```html
<button id="btn">Click</button>
```

JavaScript:

```javascript
let button = document.getElementById("btn")

button.onclick = function(){
 alert("Button clicked")
}
```

---

# 15. Modern Best Practice

Most developers prefer:

```
querySelector()
querySelectorAll()
```

Because:

• they support CSS selectors  
• they are flexible  
• they are cleaner

---

# 16. Summary Table

| Method | Returns | Usage |
|------|------|------|
| getElementById | Element | Select single element by ID |
| getElementsByClassName | HTMLCollection | Select elements by class |
| getElementsByTagName | HTMLCollection | Select by tag |
| querySelector | Element | First CSS selector match |
| querySelectorAll | NodeList | All CSS selector matches |

---

# 17. Learning Recommendation

To master DOM selection:

Practice:

1. Selecting elements
2. Changing text
3. Changing styles
4. Adding click events
5. Adding or removing elements

DOM selection is the **foundation of DOM manipulation and frontend development**.

---
