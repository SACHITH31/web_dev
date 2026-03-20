# DOM Create Elements Guide

This document explains how to create new HTML elements using JavaScript.

---

# 1. createElement()

The `createElement()` method is used to create a new HTML element.

Syntax:

```javascript
document.createElement("tagName")
```

Example:

```javascript
let div = document.createElement("div")
```

This creates a new `<div>` element in memory.

---

# 2. Adding Content

After creating an element, we can add text using:

```javascript
element.textContent = "Hello"
```

---

# 3. Styling the Element

We can apply styles using JavaScript:

```javascript
element.style.backgroundColor = "lightblue"
element.style.padding = "10px"
```

---

# 4. Adding Element to DOM

To display the element on the page, we must insert it into the DOM.

```javascript
parent.appendChild(element)
```

Example:

```javascript
container.appendChild(div)
```

---

# 5. Important Concept

`createElement()` only creates the element in memory.

It does not show on the page until it is added to the DOM.

---

# 6. Example Workflow

```javascript
let div = document.createElement("div")
div.textContent = "New Element"
container.appendChild(div)
```

---

# 7. Real Use Cases

- Creating dynamic UI elements
- Adding new items in a list
- Displaying API data
- Building components in frontend applications

---

# 8. Summary

| Step | Action |
|------|------|
| 1 | createElement() |
| 2 | Add content |
| 3 | Style (optional) |
| 4 | appendChild() |

---

This is the first step in dynamic DOM manipulation.
