console.log('this is practice paper 1..')

let v = document.links
let name = ""

Array.from(v).forEach(function(element){
    if(element.href.includes(name)){
        console.log(element.href)
    }
    else{
        console.log('link is not available related to your search')
    }
})