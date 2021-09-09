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
  
  
  
  //resumen
  //hacer elementos, luego ponerlos en divs, y luego... se me fue la explicaicion
  }

function TodoClear(event){
  
    var todos = document.getElementsByName("todo")
    for (var i=0; i < todos.length; i++){
        todos[i].checked = false
    }
}

function TodoMark(event){
    var todos = document.getElementsByName("todo")
    for (var i=0; i < todos.length; i++){
        todos[i].checked = true
    }
}

function TodoDel(event) {
    /*
    var todos = document.getElementsByName("todo")
    for (var i=0; i < todos.length; i++){
        todos[i].parentElement.remove()
    }
    */

    var list = document.getElementById("todoList");
    list.innerHTML=""
}

//refrs -> event listener --> funciones