var addItem = document.getElementById("botonAdd")


addItem.addEventListener("click",postItem)

function postItem(event){
    event.preventDefault()
   // console.log("hi")
   var inputText = document.getElementById("newText").value
   var list = document.getElementById("lista")
    //hacer los elementos para item en cajita
   var div = document.createElement("div")
   var li = document.createElement("li")
   var p = document.createElement("p")
   var checkBoton = document.createElement("button")
   var delBoton = document.createElement("button")
   checkBoton.addEventListener("click", checkText)
   delBoton.addEventListener("click", deleteText)

   checkBoton.className="checar"
   delBoton.className="del"
   p.textContent = inputText
   p.className="producto"
   checkBoton.textContent = "check"
   delBoton.textContent = "delete"
   li.className="lis"

   div.appendChild(li)
   li.appendChild(p)
   li.appendChild(checkBoton)
   li.appendChild(delBoton)
   list.appendChild(div)

}

function checkText(event){

    $(this).parent().toggleClass("chec")

}
function deleteText(event){

    $(this).parent().remove()

}
