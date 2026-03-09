/*
=====================================
BROWSER OBJECT MODEL METHODS
=====================================
*/

// 1️⃣ location

console.log(location.href)

// OUTPUT:
// https://yourwebsite.com/page


// 2️⃣ history

console.log(history.length)

// OUTPUT:
// Number of pages visited in current tab
// Example: 5


// 3️⃣ innerHeight

console.log(window.innerHeight)

// OUTPUT:
// Browser window height
// Example: 800


// 4️⃣ innerWidth

console.log(window.innerWidth)

// OUTPUT:
// Browser window width
// Example: 1280


// 5️⃣ open()

var newWindow = window.open("https://www.google.com")

// OUTPUT:
// Opens Google in a new browser tab or window


// 6️⃣ close()

// This will close the window opened by JavaScript
// newWindow.close()

// OUTPUT:
// Closes the opened window


// 7️⃣ resizeBy()

// Increase window size by pixels
// window.resizeBy(100,100)

// OUTPUT:
// Window width +100px
// Window height +100px


// 8️⃣ resizeTo()

// Set window to exact size
// window.resizeTo(500,500)

// OUTPUT:
// Window becomes exactly 500x500


// 9️⃣ moveTo()

// Move window to exact screen position
// window.moveTo(200,200)

// OUTPUT:
// Window moves to x=200 y=200 position


// 🔟 moveBy()

// Move window relative to current position
// window.moveBy(100,100)

// OUTPUT:
// Window moves 100px right and 100px down


// 1️⃣1️⃣ scrollBy()

window.scrollBy(0,200)

// OUTPUT:
// Page scrolls down 200px


// 1️⃣2️⃣ scroll()

window.scroll(0,300)

// OUTPUT:
// Scrolls page to position y=300


// 1️⃣3️⃣ scrollTo()

window.scrollTo(0,500)

// OUTPUT:
// Page scrolls directly to 500px position


// 1️⃣4️⃣ print()

// window.print()

// OUTPUT:
// Opens browser print dialog


// 1️⃣5️⃣ document

console.log(document.title)

// OUTPUT:
// Shows title of webpage

console.log(document.body)

// OUTPUT:
// Shows entire HTML body element
