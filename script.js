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
        console.log('this is x from click', x)
    })
}
ok.addEventListener('click', function (e) {
    let noElement = document.getElementById('no'); 
    if (noElement.classList.contains('toggleOn')) { 
        noElement.classList.replace('toggleOn', 'toggleOff'); 
    } 
    else if(noElement.classList.contains('toggleOff')) { 
        noElement.classList.replace('toggleOff', 'toggleOn'); 
    } 
    else { 
        noElement.classList.add('toggleOn'); 
    }
});
let margin = 20
ok.addEventListener('click', function(e){
    margin += 5;
    var marginSize = `20px ${margin}px 20px ${margin}px`
    document.getElementById('cancel').style.margin = marginSize
    document.getElementById('no').style.margin = marginSize
})
var borderTick = 5
document.getElementById('cancel').style.border = `${borderTick}px solid white`

let showText = ['ok','วิชานี้','ง่าย','จริงๆ นะจ้ะ']
let showIndex = 0
document.getElementById('no').addEventListener('dblclick', function(e){
    showIndex++
    if(showIndex >= showText.length){
        showIndex = 0;
    }
    console.log('show index = ${showIndex}')
    const okButton = document.getElementById('ok')
    okButton.innerText = showText[showIndex]
    // const elem = document.getElementById('ok'); 
    // if (elem.innerText === 'ok') { 
    //     elem.innerText = 'วิชานี้'
    // } 
    // else if(elem.innerText === 'วิชานี้') { 
    //     elem.innerText = 'ง่าย'
    // } 
    // else if (elem.innerText === 'ง่าย') { 
    //     elem.innerText === 'จริงๆ นะจ้ะ'  
    // }
    // else if (elem.innerText === 'จริงๆ นะจ้ะ') { 
    //     elem.innerText === 'ok'  
    // }
})