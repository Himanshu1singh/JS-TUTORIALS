console.log("hi this is tut8")
const age =900;
const vari = 55;
const doesDrive = true

if(age == 19){
    console.log('age is 19')
}

else if(age != 65){
    console.log('age is 65')
}
else{
    console.log('age is not 19')
}

if(typeof vari != 'undefined'){
    console.log('vari is defined')
}

else{
    console.log('vari is not defined');
}


if(doesDrive && age >=18 && age <= 90){
console.log("yes you can drive");
}
else{
    console.log('you can not drive')
}


console.log(age==45? 'age is 45':'age is not 45')


switch (age) {
    case 18:
        console.log("you are 18");
        break;

        case 45:
            console.log("you are 45");
            break;

            case 38:
                console.log("you are 38");
                break;

    default:
        case 18:
            console.log("you are not in any of our criteria");
        break;
}