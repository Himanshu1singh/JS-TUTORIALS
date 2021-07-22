console.log('this is tut20')

let impArray = ['taurai', 'lauki', 'ghuiya']

localStorage.setItem('name', 'himanshu singh')
localStorage.setItem('sabzi', JSON.stringify(impArray))

localStorage.removeItem('')

let getItem1 = localStorage.getItem('name')
let getItem2 = JSON.parse(localStorage.getItem('sabzi'))

console.log(getItem1)
console.log(getItem2);
