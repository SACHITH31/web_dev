# Global Execution Context in JavaScript (JS)

## 1. What is Execution Context?

An **Execution Context** is an environment where JavaScript code is **evaluated and executed**.

Think of it as a **box** where JavaScript keeps track of:

* Variables
* Functions
* The value of `this`

JavaScript always runs code **inside an execution context**.

---

## 2. What is Global Execution Context (GEC)?

The **Global Execution Context** is the **first execution context** created when a JavaScript program starts.

📌 There is **only ONE Global Execution Context** in a program.

It is created when:

* The JS file starts running
* Or when code runs in the browser console

---

## 3. What happens inside Global Execution Context?

The Global Execution Context has **two main phases**:

1. **Creation Phase**
2. **Execution Phase**

---

## 4. Creation Phase (Very Important)

Before running a single line of code, JavaScript scans the entire file.

During this phase:

### ✅ Memory is allocated for:

* Variables
* Functions

This process is called **Hoisting**.

---

### 4.1 Variable Hoisting

```js
var a = 10;
```

During creation phase:

```js
a = undefined
```

❗ `var` variables are hoisted and set to `undefined`.

---

### 4.2 Function Hoisting

```js
function greet() {
  console.log("Hello");
}
```

During creation phase:

* Entire function is stored in memory

So you can call a function **before it is written**.

---

### 4.3 let and const

```js
let x = 5;
const y = 10;
```

* Memory is allocated
* But **NOT initialized**

Accessing them before declaration causes:

❌ **ReferenceError**

This area is called the **Temporal Dead Zone (TDZ)**.

---

## 5. Execution Phase

Now JavaScript starts running code **line by line**.

* Assigns real values to variables
* Executes function calls

Example:

```js
var a = 10;
console.log(a);
```

During execution phase:

* `a` gets value `10`
* `10` is printed

---

## 6. Global Object

In the Global Execution Context:

* In **Browser** → `window`
* In **Node.js** → `global`

Example:

```js
var x = 10;
console.log(window.x); // 10
```

❗ Only `var` attaches to global object

---

## 7. this keyword in Global Context

* In browser:

```js
this === window // true
```

* In strict mode:

```js
this === undefined
```

---

## 8. Simple Flow of Global Execution Context

1. JS file starts
2. Global Execution Context created
3. Creation Phase runs
4. Execution Phase runs
5. Program finishes

---

## 9. Simple Example (Full Flow)

```js
console.log(a);
var a = 10;
hello();

function hello() {
  console.log("Hi");
}
```

### Output:

```text
undefined
Hi
```

### Why?

* `a` is hoisted → `undefined`
* `hello()` is fully hoisted

---

## 10. Key Points to Remember ⭐

* Global Execution Context is created **first**
* Only **one** GEC exists
* It has **Creation + Execution** phases
* Hoisting happens in Creation Phase
* `var` → `undefined`
* Functions → fully hoisted
* `let/const` → Temporal Dead Zone

---

## 11. One-Line Summary

> **Global Execution Context is the main environment where JavaScript starts executing your code.**

---

✅ This entire file is written in **Markdown (.md)** and ready to use for notes, GitHub, or study.
