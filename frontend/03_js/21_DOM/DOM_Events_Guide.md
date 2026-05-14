# DOM Events Guide

This document explains how JavaScript handles events.

---

# 1. What is an Event?

An event is an action that occurs in the browser.

Examples:

- Click
- Typing
- Mouse movement
- Key press

---

# 2. addEventListener()

Used to attach an event to an element.

Syntax:

```javascript
element.addEventListener("event", function)
```

Example:

```javascript
button.addEventListener("click", function(){
 console.log("Clicked")
})
```

---

# 3. Common Events

## Click Event

```javascript
element.addEventListener("click", function(){})
```

---

## Input Event

```javascript
element.addEventListener("input", function(){})
```

---

## Mouse Events

```javascript
mouseover
mouseout
```

---

## Keyboard Events

```javascript
keydown
keyup
```

---

# 4. Event Object

Every event provides an object.

Example:

```javascript
element.addEventListener("click", function(event){
 console.log(event.target)
})
```

event.target → element that triggered the event

---

# 5. Why Use addEventListener?

- Allows multiple events
- Cleaner code
- More flexible

---

# 6. Example

```javascript
button.addEventListener("click", function(){
 alert("Clicked")
})
```

---

# 7. Summary

| Event | Description |
|------|------|
| click | When element is clicked |
| input | When user types |
| mouseover | Mouse enters |
| mouseout | Mouse leaves |
| keydown | Key pressed |

---

This topic is essential for building interactive web applications.
