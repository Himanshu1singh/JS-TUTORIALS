console.log('this is tut14');

let element = document.getElementById('myFirst');

element.style.color = 'blue'
element.innerText = "this is something form the innerHTML.."
element.innerHTML = "<h1>i have changed it to the bold </h1>"
// console.log(element.innerHTML)
 
let selector = document.querySelector('#heading')
selector.style.color = 'red'
// console.log(selector)

let div = document.getElementsByTagName('div')

Array.from(div).forEach(function(element){
    element.style.color = 'blue'
})
console.log(element)



