var post = document.getElementById("ButtonPost")
var clear = document.getElementById("ButtonClear")
var mark = document.getElementById("ButtonMark")
var del = document.getElementById("ButtonDelete")

//
post.addEventListener("click", TodoPost)
clear.addEventListener("click", TodoClear)
mark.addEventListener("click", TodoMark)
del.addEventListener("click", TodoDel)


function TodoPost(event){
  event.preventDefault()
  //esta fun evita el recargar del formulario!
  var todo = document.getElementById("todoText").value
 // alert(todo)
  var list = document.getElementById("todoList");
  //div needed for org and ease of deletion
  var div = document.createElement("div")
  var checkbox = document.createElement("input")
  var label = document.createElement("label")
  
  checkbox.type="checkbox"
  checkbox.name="todo"
  label.textContent = todo

  
  div.appendChild(checkbox)
  div.appendChild(label)
  list.appendChild(div)
  
  }

function TodoClear(event){
  
    var todos = document.getElementsByName("todo")

    todos.forEach(element => {
        element.checked=false
    })
}

function TodoMark(event){
    var todos = document.getElementsByName("todo")

    todos.forEach(element => {
        element.checked=true
    })
}

function TodoDel(event) {
   

    var list = document.getElementById("todoList");
    list.innerHTML=""
}

//refrs -> event listener --> funciones