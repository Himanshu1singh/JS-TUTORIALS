console.log('this is tut18')

//  document.getElementById('btn').addEventListener('click',func1);

// function func1(e) {
// console.log('this is done by clicking on the button');
// }


// document.getElementById('heading').addEventListener('mouseenter',function(e) {
//     console.log('you entered in the children node')
// })


// document.getElementById('heading').addEventListener('mouseleave',function(e) {
//     console.log('you exited from the children node')
// })


document.getElementById('container1').addEventListener('mousemove',function(e){
    console.log(e.offsetX, e.offsetY)
    document.body.style.
    backgroundColor = `rgba(${e.offsetX},${e.offsetY},${e.offsetX},${e.offsetY})`
    console.log('this is a event')
})

