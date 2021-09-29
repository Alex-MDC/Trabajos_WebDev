
$("#botonAdd").on("click",function(){
    
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
    
    checkBoton.className="checar"
    checkBoton.id="checarBotonQ"
    delBoton.className="del"
    delBoton.id="delBotonQ"
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

})
$("#lista").on("click",".del",function(){
    $(this).parent().remove()
   
})
$("#lista").on("click", ".checar",function(){
    $(this).parent().toggleClass("chec")
})



