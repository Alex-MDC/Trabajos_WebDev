
$("#ButtonClear").on("click",function(){
    var todos = document.getElementsByName("todo")

    todos.forEach(element => {
        element.checked=false
    })
})
$("#ButtonMark").on("click",function(){
    var todos = document.getElementsByName("todo")

    todos.forEach(element => {
        element.checked=true
    })
})
$("#ButtonDelete").on("click",function(){
    var list = document.getElementById("todoList");
    list.innerHTML=""
})

$("#ButtonPost").on("click",function(){
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
})