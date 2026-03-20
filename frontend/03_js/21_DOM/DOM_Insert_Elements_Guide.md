# DOM Insert Elements Guide

This document explains different ways to insert elements into the DOM.

Methods covered:

- append()
- prepend()
- before()
- after()

---

# 1. append()

Adds a new element at the end of a parent element.

```javascript
parent.append(element)
```

Example:

```javascript
container.append(newElement)
```

---

# 2. prepend()

Adds a new element at the beginning of a parent element.

```javascript
parent.prepend(element)
```

Example:

```javascript
container.prepend(newElement)
```

---

# 3. before()

Inserts a new element before a specific element.

```javascript
element.before(newElement)
```

Example:

```javascript
reference.before(newElement)
```

---

# 4. after()

Inserts a new element after a specific element.

```javascript
element.after(newElement)
```

Example:

```javascript
reference.after(newElement)
```

---

# 5. Position Summary

| Method | Position |
|------|------|
| append() | End of parent |
| prepend() | Beginning of parent |
| before() | Before element |
| after() | After element |

---

# 6. Example Structure

```
container
 ├── prepend()
 ├── existing content
 └── append()

reference element
 ├── before()
 └── after()
```

---

# 7. When to Use

- append() → add items at end (like todo list)
- prepend() → add items at top (latest first)
- before() → insert before specific element
- after() → insert after specific element

---

# 8. Summary

These methods give full control over element placement in the DOM.

They are widely used in dynamic web applications.
