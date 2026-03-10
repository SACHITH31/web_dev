/*
===============================
BROWSER OBJECT MODEL (BOM)
===============================

BOM stands for Browser Object Model.

It allows JavaScript to interact with the browser itself.

In simple words:
BOM = JavaScript controlling the browser window.

Example things JavaScript can do using BOM:
• Open new browser windows
• Close browser windows
• Move the window
• Resize the window
• Scroll the page
• Access browser history
• Get browser location (URL)
• Print the page

--------------------------------

MAIN OBJECT IN BOM

The main object is:

window

The window object represents the browser window.

IMPORTANT:
Every global JavaScript code runs inside the window object.

Example:

console.log(window)

This will print the entire browser window object.

--------------------------------

WINDOW OBJECT FEATURES

The window object contains many properties and methods.

Examples:

window.location
window.history
window.open()
window.close()
window.print()

Actually we usually do NOT write "window".

Example:

window.alert("Hello")

is same as

alert("Hello")

Because alert() already belongs to window.

--------------------------------

BOM VS DOM

Many beginners confuse BOM and DOM.

BOM
Controls the browser.

Examples:
location
history
screen
navigator
window

DOM
Controls the webpage HTML.

Example:
document.getElementById()
document.querySelector()

--------------------------------

IMPORTANT BOM OBJECTS

1️⃣ window
Represents the browser window.

2️⃣ location
Contains information about current URL.

Example:
location.href

3️⃣ history
Contains browser history.

Example:
history.back()

4️⃣ navigator
Contains browser information.

Example:
navigator.userAgent

5️⃣ screen
Contains screen information.

Example:
screen.width

--------------------------------

COMMON BOM OPERATIONS

JavaScript can:

Open new window

window.open("https://google.com")

Close window

window.close()

Move window

window.moveTo(100,100)

Resize window

window.resizeTo(500,500)

Scroll page

window.scrollTo(0,500)

Print page

window.print()

--------------------------------

WHY BOM IS IMPORTANT

BOM helps developers to:

• Control browser behavior
• Navigate pages
• Handle browser history
• Create popup windows
• Control scrolling
• Interact with browser environment

--------------------------------

VERY IMPORTANT NOTE

Some BOM methods are restricted by browsers for security.

Example:
window.close()

It only works if the window was opened using JavaScript.

--------------------------------

SUMMARY

BOM = JavaScript controlling the browser.

Main object = window

Important features:
location
history
open()
close()
resize
move
scroll
print

--------------------------------
*/
