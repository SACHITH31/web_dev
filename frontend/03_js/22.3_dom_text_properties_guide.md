# DOM Text Properties Guide

This document explains three important DOM properties used to access or modify the content inside HTML elements.

Topics covered:

- innerText
- textContent
- innerHTML
- Difference between innerText and textContent

---

# 1. innerText

innerText returns the visible text inside an HTML element.

It shows the text exactly as the user sees it on the webpage.

Example:

```javascript
element.innerText
```

If some text is hidden using CSS such as `display:none`, it will not be included.

Example:

```html
<div>
Hello
<span style="display:none">Hidden</span>
</div>
```

Result:

```
Hello
```

---

# 2. textContent

textContent returns all the text inside an element.

This includes hidden text.

Example:

```javascript
element.textContent
```

Example result:

```
Hello Hidden
```

Characteristics:

- Includes hidden text
- Ignores CSS styling
- Faster than innerText

---

# 3. innerHTML

innerHTML returns the HTML markup inside an element.

Example:

```javascript
element.innerHTML
```

Example HTML:

```html
<div id="box">
<p>Hello</p>
</div>
```

Output:

```html
<p>Hello</p>
```

innerHTML can also insert new HTML content.

Example:

```javascript
element.innerHTML = "<h1>New Heading</h1>"
```

---

# 4. innerText vs textContent

| Feature | innerText | textContent |
|------|------|------|
| Visible text only | Yes | No |
| Includes hidden text | No | Yes |
| Affected by CSS | Yes | No |
| Performance | Slower | Faster |

---

# 5. When to Use Each

Use **innerText** when you want the text exactly as the user sees it.

Use **textContent** when you want all text stored inside the DOM.

Use **innerHTML** when you want to insert or modify HTML elements.

---

# 6. Summary

innerText → visible text only  
textContent → all text including hidden text  
innerHTML → HTML structure inside an element
