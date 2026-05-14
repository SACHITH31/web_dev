# Event Bubbling & Capturing Guide

This document explains how events travel in the DOM.

---

# 1. Event Flow

When an event occurs, it travels in two phases:

1. Capturing Phase (top to bottom)
2. Bubbling Phase (bottom to top)

---

# 2. Event Bubbling

Default behavior.

Event starts from target element and moves upward.

Example:

```
button → div → body
```

JavaScript:

```javascript
element.addEventListener("click", function(){})
```

---

# 3. Event Capturing

Event starts from top and moves downward.

To enable capturing:

```javascript
element.addEventListener("click", function(){}, true)
```

---

# 4. stopPropagation()

Stops event from moving further.

```javascript
event.stopPropagation()
```

---

# 5. Example Flow

Clicking a button inside nested elements:

Bubbling:

```
button → parent → outer
```

Capturing:

```
outer → parent → button
```

---

# 6. Summary

| Concept | Direction |
|------|------|
| Bubbling | Bottom → Top |
| Capturing | Top → Bottom |

---

# 7. Use Cases

- Prevent unwanted event triggers
- Control event flow
- Handle nested elements correctly

---

This is an advanced but important DOM concept.
