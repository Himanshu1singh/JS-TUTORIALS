//type conversion and type coercion
console.log("welcome to tut5");
let myVar;
myVar = String(25);
console.log(typeof myVar);

let booleanVar = String(true);
console.log(booleanVar,(typeof booleanVar));

let date = String(new Date());
console.log(date,(typeof date));

let arr = String([1,2,8,32,8,3,2,4]);
console.log(arr.length,(typeof arr))

let number = 25
console.log(number.toString())

let sti = "5456"
sti = Number("4154")
console.log(sti,(typeof sti));


let number1 = parseFloat('254.85');
console.log(number1,(typeof number1))