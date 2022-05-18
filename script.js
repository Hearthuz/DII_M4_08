// document.getElementById('cancel').addEventListener('mousemove', function(e){
//     console.log("X = ", e.screenX)
//     console.log("Y = ", e.screenY)
// })
let elems = document.getElementsByClassName('flex-item')
console.log(elems)
let x = 5
for(let elem of elems){
    elem.addEventListener('mousemove', function(e){
        console.log("x = ", e.screenX, "y = ", e.screenY)
        let x = 20
        console.log(x)
    })
    elem.addEventListener('click', function(e){
        alert(elem.innerText)
        console.log('this is x from click', x)
    })
}
