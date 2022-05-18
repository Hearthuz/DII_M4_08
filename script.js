var newText = 'new Text'
document.getElementById('ok').innerHTML = newText
var name = 'Heart'
document.getElementById('no').innerHTML = "<b><i>"+name+"</i></b>"
document.getElementById('ok').addEventListener('click', function(e){
    alert('ok is clicked')
    console.log(e)
})