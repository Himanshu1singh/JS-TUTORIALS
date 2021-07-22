console.log("this is tut7");

let marks = [1,2,5,6,9,8,2,7];
marks.push(25)
const fruits = ['orange', 'apple', 'banana'];
const mixed = ['str',87,[8,9]]

const arr = new Array(25,48,558,'orange')

//console.log(marks)
//console.log(arr)
//console.log(fruits);
//console.table(mixed);

//console.log(arr.length)

//marks.unshift(4548);
//console.log(marks)

//marks.pop();
//console.log(marks)

//marks.shift();
//console.log(marks)

//marks.splice(1,3)
//console.log(marks)

const marks2 = [1,245,15,21,84];
marks = marks.concat(marks2);
console.log(marks)

let val = marks.indexOf(84)
console.log(val)

// mutuating or modifying array

let myobj = {
name:"Himanshu singh",
channel:"himanshuopensource",
isActive:"true",
marks:[1,5,9,7]
}

console.log(myobj)
console.log(myobj.marks);
console.log(myobj.name.replace('singh', 'thakur').toUpperCase())


