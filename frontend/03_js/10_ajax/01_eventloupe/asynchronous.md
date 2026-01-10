# asynchronous concept in JS

## 1️⃣ First: what problem does “async” solve?
- JavaScript is single-threaded.
- That means it can do only one thing at a time.
``` JS
console.log("A");
console.log("B");
console.log("C");
```
**Output:** 
```Js
A
B
C
```
**Everything waits for the previous line to finish.**

---
## 2️⃣ The problem in real life

**Imagine this:**
```JS
getDataFromServer(); // takes 5 seconds
console.log("Hello");
```

- If JS waits 5 seconds → the whole app freezes 😵
- Buttons don’t work, screen doesn’t update.

👉 Bad user experience

```
“I’ll start the long work… but I won’t wait. I’ll come back later.”
```
**That idea = Asynchronous**
