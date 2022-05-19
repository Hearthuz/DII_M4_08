var searchButton = document.getElementById('searchButton')
var inputText = document.getElementById('inputText')
var output = document.getElementById('output')

function addText(){
    let text = inputText.value
    console.log(text)
    let newButton = document.createElement('button')
    newButton.classList.add('btn')
    newButton.classList.add('btn-outline-primary')
    newButton.setAttribute('type','button')
    newButton.innerText = text
    output.appendChild(newButton)
}
inputText.addEventListener('blur',addText)
searchButton.addEventListener('click',addText)