//Primitive data type 

//String

const name = "Thakur Himanshu"
console.log("this is workinng fine " +typeof name);

//Number

let marks = 25;
console.log("marks type "+(typeof marks))

//boolean

let isBoolean = true;
console.log("Boolean type "+(typeof isBoolean))

//Null

let nullVar = null;
console.log("null type "+(typeof nullVar))

//undefined

let undef = undefined;
console.log("undefined type "+(typeof undef))


//Reference data types 

myarr = [1,2,5,6,5,7,8,false,"string"];
console.log("data type of an array "+(typeof myarr));

let stuMarks = {
harry:65,
himanshu:90,
rahul:75
}

console.table(stuMarks);
function findName() {
    
}

console.log(typeof findName);

let date = new Date();

console.log(date)