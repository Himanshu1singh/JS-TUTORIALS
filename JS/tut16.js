console.log('this is tut16')
/*
let container = document.querySelector('div.container')
console.log(container.children[2]) // you may use children under children to go deep inside each tag
*/

let element = document.createElement('li')
let text = document.createTextNode('rahul is my friend')
element.appendChild(text)

element.className = 'lilist'
// element.innerHTML = 'himanshu singh is studying'

let ul = document.querySelector('ul.ullist')
ul.appendChild(element)

console.log(element)


let element2 = document.createElement('h1')
let text2 = document.createTextNode('this is a node')
element2.appendChild(text2)


element2.className = 'h1'
element.replaceWith(element2)


let uli = document.getElementById('uli')

// uli.replaceChild(element,document.getElementById('lui'));

// uli.removeChild(document.getElementById('fui'))

// element2.setAttribute('id','fucksomebody')

// let attr = element2.getAttribute('id')

// element2.removeAttribute('id')

// console.log(element2)

console.log(attr)
