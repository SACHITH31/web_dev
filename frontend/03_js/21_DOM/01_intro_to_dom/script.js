// DOM- DOCUMENT OBJECT MODEL
console.log(document)
console.dir(document)

console.log(typeof document) // object

// the children of the document is always the html only
// and the children of the html will varies, but in max cases it will be head and body

// FOR FUN😅😅
// hold on a sec...? then the parent element of document is🤔🤔 ????? Ans: null😜

// now serious 😤
const a = document.children[0]
console.log(a) //html

//  body
//  |
//  |--- div (1st children)
//  |--- p (2st children)

// accessing the element(div) which is in the first position in the childrens of body. REFERENCE: see the above hierarchy
const firstChildren = document.children[0].children[1].children[0] // method-1
                            // (or)
                    //   document.body.children[0] // method-2
console.log(firstChildren) // div
console.log(typeof firstChildren) // object
