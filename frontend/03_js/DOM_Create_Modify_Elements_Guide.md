# DOM Create & Modify Elements Guide

This document explains how to create, add, remove, and replace elements using JavaScript.

---

# 1. createElement()

Used to create a new HTML element.

```javascript
let element = document.createElement("tagName")
```

Example:

```javascript
let li = document.createElement("li")
```

---

# 2. Adding Elements

## appendChild()

Adds element at the end.

```javascript
parent.appendChild(child)
```

---

## append()

Also adds element at the end.

```javascript
parent.append(child)
```

---

## prepend()

Adds element at the beginning.

```javascript
parent.prepend(child)
```

---

# 3. Removing Elements

## remove()

Removes an element from the DOM.

```javascript
element.remove()
```

---

# 4. Replacing Elements

## replaceWith()

Replaces an element with another element.

```javascript
oldElement.replaceWith(newElement)
```

---

# 5. Inserting Elements at Specific Positions

## before()

Adds element before another element.

```javascript
element.before(newElement)
```

---

## after()

Adds element after another element.

```javascript
element.after(newElement)
```

---

# 6. Example Workflow

```javascript
let li = document.createElement("li")
li.textContent = "New Item"
list.appendChild(li)
```

---

# 7. Real Use Cases

- Todo apps (adding tasks)
- Chat apps (adding messages)
- Forms (adding input fields dynamically)

---

# 8. Summary

| Method | Purpose |
|------|------|
| createElement | Create new element |
| appendChild | Add at end |
| append | Add at end |
| prepend | Add at beginning |
| remove | Delete element |
| replaceWith | Replace element |
| before | Insert before |
| after | Insert after |

---

This topic is essential for building dynamic web applications.
