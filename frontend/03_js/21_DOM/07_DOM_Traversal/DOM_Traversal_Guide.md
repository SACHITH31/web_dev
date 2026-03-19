# DOM Traversal Guide

DOM traversal means moving through the DOM tree to access related elements.

HTML elements are arranged in a hierarchical structure similar to a tree.

Example:

```
body
 └── div
      ├── h1
      ├── p
      └── ul
           ├── li
           ├── li
           └── li
```

In this structure elements have relationships such as:

- parent
- children
- siblings

---

# Parent Element

Every element except the root has a parent.

Example:

```
<ul>
   <li>Apple</li>
</ul>
```

The parent of `<li>` is `<ul>`.

JavaScript:

```javascript
element.parentElement
```

Example:

```javascript
let parent = banana.parentElement
```

---

# Children Elements

A parent element can contain multiple child elements.

Example:

```
<ul>
   <li>Apple</li>
   <li>Banana</li>
   <li>Orange</li>
</ul>
```

JavaScript:

```javascript
element.children
```

Example:

```javascript
let children = fruitList.children
```

This returns an **HTMLCollection**.

---

# First Child Element

Returns the first child element.

JavaScript:

```javascript
element.firstElementChild
```

Example:

```javascript
let first = fruitList.firstElementChild
```

---

# Last Child Element

Returns the last child element.

JavaScript:

```javascript
element.lastElementChild
```

Example:

```javascript
let last = fruitList.lastElementChild
```

---

# Next Sibling

Sibling elements share the same parent.

Example:

```
<li>Apple</li>
<li>Banana</li>
<li>Orange</li>
```

JavaScript:

```javascript
element.nextElementSibling
```

Example:

```javascript
banana.nextElementSibling
```

Result:

```
Orange
```

---

# Previous Sibling

Accesses the element before the current element.

JavaScript:

```javascript
element.previousElementSibling
```

Example:

```javascript
banana.previousElementSibling
```

Result:

```
Apple
```

---

# Summary

| Property | Description |
|------|------|
| parentElement | Access parent |
| children | Access all child elements |
| firstElementChild | First child |
| lastElementChild | Last child |
| nextElementSibling | Next sibling |
| previousElementSibling | Previous sibling |

---

# Practical Use

DOM traversal helps when:

- navigating UI elements
- modifying related elements
- handling dynamic lists
- building interactive interfaces
