console.log('this is a practicepaper2...')

let element = document.createElement('div')
let val = localStorage.getItem('text')
let text;
if(val == null){
 text = document.createTextNode('this is clickable you can text node by clicking on it..')
}
else{
text = document.createTextNode(val)
}
element.appendChild(text)

element.className = 'elem'
element.setAttribute('id','elem')
element.setAttribute('style','border:2px solid red;width:156px;margin:34px;padding:23px')
let container = document.querySelector('.container')
container.appendChild(element)
let myfirst = document.getElementById('myfirst')

container.insertBefore(element,myfirst)

element.addEventListener('click',function(){
        let noTextarea = document.getElementsByClassName('textarea').length
        if(noTextarea == 0){

            let html = element.innerHTML 
           element.innerHTML =  `<textarea class = 'textarea' id = 'textarea'>${html}</textarea>`;
        }
       let textarea = document.getElementById('textarea')
       textarea.addEventListener('blur',function(){
            element.innerHTML = textarea.value
            localStorage.setItem('text',element.innerHTML)
        })
})
console.log(element)