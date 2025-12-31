# JavaScript Scopes & Execution Stack (Simple and Detailed)

## 1. Big Picture (Understand This First)

When JavaScript runs, it manages code using:

* **Execution Contexts**
* **Scopes**
* **Call Stack**

All of these work together to decide:

* What code runs
* In what order
* Which variables are accessible

---

## 2. What is an Execution Context?

An **Execution Context** is an environment where JavaScript code is executed.

It contains:

* Variables
* Functions
* Scope information
* `this` value

📌 JavaScript always runs inside an execution context.

---

## 3. Types of Execution Contexts

JavaScript has mainly **two** types:

1. **Global Execution Context (GEC)**
2. **Function Execution Context (FEC)**

---

## 4. Global Execution Context (GEC)

* Created **first** when the JS file starts
* Only **one** GEC exists
* Code outside functions runs here

### What it contains:

* Global variables
* Global functions
* Global scope

Example:

```js
var a = 10;
function hello() {}
```

Both `a` and `hello` belong to **Global Execution Context**.

---

## 5. Function Execution Context (Local Context)

* Created **every time a function is called**
* Destroyed after function finishes
* Each function call has its **own context**

Example:

```js
function test() {
  let x = 5;
}
```

Here:

* `test()` → Function Execution Context
* `x` → Local variable

---

## 6. Creation Phase vs Execution Phase

Every execution context has **two phases**:

### 6.1 Creation Phase

* Memory is allocated
* Variables are hoisted
* Functions are stored fully

### 6.2 Execution Phase

* Code runs line by line
* Values are assigned
* Functions are executed

---

## 7. Hoisting (Quick View)

### var

```js
console.log(a);
var a = 10;
```

Output:

```text
undefined
```

### let / const

```js
console.log(x);
let x = 5;
```

❌ ReferenceError (Temporal Dead Zone)

---

## 8. What is Scope?

**Scope** decides where a variable can be accessed.

Types of scope in JavaScript:

1. Global Scope
2. Local (Function) Scope
3. Block Scope

---

## 9. Global Scope

* Variables declared outside functions
* Accessible everywhere

Example:

```js
let g = 100;

function show() {
  console.log(g);
}
```

---

## 10. Local (Function) Scope

* Variables declared inside a function
* Accessible only inside that function

Example:

```js
function demo() {
  let x = 10;
}
```

❌ `x` cannot be accessed outside

---

## 11. Block Scope

* Created by `{}`
* `let` and `const` are block-scoped

Example:

```js
if (true) {
  let a = 5;
}
```

❌ `a` not accessible outside block

---

## 12. Scope Chain ⭐

When JavaScript looks for a variable, it follows this order:

```
Local Scope
↓
Parent Scope
↓
Global Scope
```

If not found → ❌ ReferenceError

Example:

```js
let x = 10;

function outer() {
  function inner() {
    console.log(x);
  }
  inner();
}
outer();
```

JS finds `x` in **global scope**.

---

## 13. What is the Call Stack? (Execution Stack)

The **Call Stack** is a stack data structure that manages execution contexts.

📌 Stack rule: **Last In, First Out (LIFO)**

---

## 14. How Call Stack Works

Steps:

1. Global Execution Context pushed first
2. Function call → new context pushed
3. Function ends → context popped

Example:

```js
function a() {
  b();
}
function b() {
  console.log("Hi");
}
a();
```

### Stack Flow:

```
| b() |
| a() |
| GEC |
```

---

## 15. Relationship Between Scope & Stack

* **Execution Contexts** go into the **Call Stack**
* **Scopes** decide variable access
* **Scope Chain** works inside execution contexts

They are connected but **not the same thing**.

---

## 16. Common Beginner Confusion (Clear It Now)

❌ Scope is NOT a stack
❌ Global and local are NOT stacks

✅ Only **Call Stack** is a real stack
✅ Global / Local are **scopes & contexts**

---

## 17. Final One-Line Summary ⭐

> **JavaScript runs code using Execution Contexts, manages them with the Call Stack, and controls variable access using Scopes and the Scope Chain.**

---

