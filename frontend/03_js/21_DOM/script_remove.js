/*
This file explains how to remove elements from the DOM.

We will learn:

- remove()
- removing specific elements
- removing multiple elements
*/


/*
Selecting elements
*/

let list = document.getElementById("list")
let removeLastBtn = document.getElementById("removeLast")
let removeFirstBtn = document.getElementById("removeFirst")
let removeAllBtn = document.getElementById("removeAll")



/*
1. Removing the last element
*/

removeLastBtn.onclick = function(){

/*
lastElementChild gives the last element inside the list
*/

let lastItem = list.lastElementChild


/*
remove() deletes that element from the DOM
*/

if(lastItem){
lastItem.remove()
}

}



/*
2. Removing the first element
*/

removeFirstBtn.onclick = function(){

let firstItem = list.firstElementChild

if(firstItem){
firstItem.remove()
}

}



/*
3. Removing all elements
*/

removeAllBtn.onclick = function(){

/*
We loop through children and remove them one by one
*/

while(list.firstElementChild){
list.firstElementChild.remove()
}

}



/*
Important understanding:

remove() directly deletes an element.

Once removed:
- it disappears from the page
- it is no longer in the DOM

If needed again, it must be created again.
*/
