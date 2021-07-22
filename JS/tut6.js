console.log("this is tut6");

let name = 'Himanshu';
let lastname = "Singh"
const greeting = "good morning"
console.log(greeting +" "+ name)

let html;

html = " "

html = html.concat(name+lastname);
console.log(html)

// console.log(html.length);
// console.log(html.toLowerCase());
// console.log(html.toUpperCase())



// console.log(html[10])
// console.log(html.indexOf('i'))
// console.log(html.lastIndexOf('i'))
// console.log(html.charAt(13))
// console.log(html.endsWith('h'))
// console.log(html.includes('l'))
// console.log(html.substring(1,13))
// console.log(html.split(' '))  //from where you want to divide the string
//console.log(html.replace('Singh','thakur'))

let fruit1 = 'orange'
let fruit2 = 'apple';
let myHTML = `hello ${name}
<h1>This is heading</h1>
<p>you like ${fruit1} and ${fruit2}</p>
`;

document.body.innerHTML = myHTML; 