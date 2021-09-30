//esto de readyse espera a que cargue el doc y luego ejecuta
//se evitan errores por si no esta listo algo 
$(document).ready(function() {

    //start code here
    var animals = ["dog", "cat", "duck","quetzal","bunny","chicken"];


    /*
    for (var i=0; i<animals.length; i++) {
        //agrega un boton normal
        var a = $("<button>");
        //agregar clase a cada boton para facilitar seleccionarlo para deleg de eventos
        a.addClass("animal-button");
        a.attr("data-type",animals[i]);
        // data type escomo un placeholder para info
        //se guardara el dato de c/arreglo, es decir el nom del animal
        a.text(animals[i]);
        $("#animal-buttons").append(a);

    }*/

    function populateButtons(arrayToUse, classToAdd,placeHolder) {
        $(placeHolder).empty();

        for (var i=0; i<arrayToUse.length; i++) {
            var a = $("<button>");
            a.addClass(classToAdd);
            a.attr("data-type",animals[i]);
            a.text(animals[i]);
            $(placeHolder).append(a);
    
        }
    }

    //el segundo parametro .animal-button sirve para cosas dinamicas y que
    //el programa pueda identificar el elemento dinamico(cosas nuevas)
    //tamien ayuda al "this" para info per item, si no se mandaria toooda la info
    $("#animal-buttons").on("click",".animal-button",function(){
        //alert("click")
        //queremos llamar al api giphy al clickear un animal
        //1 obtener elemento de busqueda, datatype
       //aqui se limpia los animales para que no este clogged se ve el last clicked
        $("#animals").empty()
        var search = $(this).attr("data-type")
        alert(search)
        var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=laLlave"
        //editar el key!!!!
        $.ajax({url:queryUrl})
        .then(function(response) {
           // console.log(response)
            //prof recomienda usar un div para manipular easy
            var results = response.data
            for (var i=0; i<results.length; i++){
                //console.log(response)

                //se recomienda desmenusar y construir los elementos
                var animalDiv = $("<div class=\"animal-item\">");
                var rating = results[i].rating
                //estructura del parrafo
                var p = $("<p>").text("Rating: "+rating)
                //recordar estamos guardando still and animated img
                var animated = results[i].images.fixed_height.url
                var still = results[i].images.fixed_height_still.url
                //la still se usara como default

                //aqui se creara la estructura de la imagen
                var animalImage = $("<img>")
                animalImage.attr("src",still)
                animalImage.attr("data-still",still)
                animalImage.attr("data-animate",animated)
                animalImage.attr("data-isAnimated","false")
                animalImage.addClass("animal-image")
                //
                animalDiv.append(p)
                animalDiv.append(animalImage)
                // teniendo esto es el elemento completo
                $("#animals").append(animalDiv)




            }
        });

    });
    //falta darle registro del evento a la imagen, el click creo
    // buscar si esta animado
    // si no esta animado, animarlo; si esta animado; desanimarlo
    //hacer el falso entre comillas porque es string usar triple igualdad

    //registro evento imagen, ejemplo, falta el onclick y eso
    
    /*
    if (state =="false"){
        $(this).attr("src", $(this).attr("data-aniimate"))
        $(this).attr("data-isAnimated","true");

    }
    else{
        $(this).attr("src", $(this).attr("data-still"))
        $(this).attr("data-isAnimated","false");
    }
    */

    populateButtons(animals,"animal-button","#animal-buttons")

});