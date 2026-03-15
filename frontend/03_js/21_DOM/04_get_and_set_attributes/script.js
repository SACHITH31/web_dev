// what are attribute:🤔🤔 ??
// In HTML, attributes are extra information added to an HTML element.
// They modify or control the behavior of an element.

// Think of it like this:

// 👉 HTML tag = the object
// 👉 Attribute = extra details about that object

{/* <tag attribute="value">Content</tag> */}
// attribute → the name of the property
// value → (the setting or data for that property) or (the value of the attribute)

// EXAMPLE : <a href = 'https:google.com'>Go TO Google </a>
// here a is tag name
// here href is the ATTRIBUTE
// here https:google.com is the value of the attribute


// common attributes: id, class, src, href, alt, title, style, type, placeholder, required, etc.....,,,,


// WITHOUT USING THE GETATTRIBUTES
const a = document.querySelector('#sampleId')
console.dir(a)
console.log(a.attributes) // NamedNodeMap {0: id, 1: class, 2: something, id: id, class: class, something: something, length: 3}
console.log(a.attributes[0]) // id="sampleId"
console.log(a.attributes[2]) // something="someThing"
console.log(a.attributes.id.value) //sampleId

// WITH GETATTRIBUTE
console.log(a.getAttribute('id')) //sampleId
console.log(a.getAttribute('id1')) //null


// SETATTRIBUTE
// syntax: variableName.setAttribute('attributeName', 'attributeValue')
a.setAttribute('title', 'setted attribute')
a.setAttribute('sample', 'sample attribute')