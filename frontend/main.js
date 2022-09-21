let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer')
let inputField = document.getElementById('inputField')


addToDoButton.addEventListener('click', () => {
    if(!inputField.value){
        alert('An item must be added');
        return
    }
    var paragraph = document.createElement('p')
    paragraph.innerText = inputField.value
    toDoContainer.appendChild(paragraph)
    paragraph.classList.add('br-bottom')
    paragraph.classList.add('paragraph-styling')
    inputField.value = ""
    paragraph.addEventListener('click', function(){
         paragraph.style.textDecoration = 'line-through'
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph)
    })
})