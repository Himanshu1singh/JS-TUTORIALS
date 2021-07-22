console.log('this is tut9')

console.time("this is your code run time")
/*for (let i = 0; i < 100; i++) {
    console.table(i);
}*/

/*
let j = 1;
while (j <= 6) {
    if(j===4){
        break;
    }
    console.log(j + 1)
 
    j += 1;
}

console.log('this is 1st completed')

let k = 0;
do {
    if(k===5){
        k+=1;
        continue;
    }
    console.log(k + 1)
    k += 1;
} while (k < 10);

console.log("this is finished")


console.timeEnd("this is your code run time");

const arr = [1,8,9,7,1,6];

arr.forEach(function(element){
    console.log(element);
})
*/

let obj = {
    name: 'rahul kumar badala',
    age: 78,
    type:"dangerous programmer",
    os:"ubuntu"
}

for(let key in obj){
    console.log(obj[key])
}

console.log('done');