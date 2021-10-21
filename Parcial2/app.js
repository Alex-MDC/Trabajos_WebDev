// 1.0  ## Importa e inicializa express ##
var express = require("express");
var path = require("path");
var app = express();

//-----
var animals = [
   {
     animalType: "dog",
     pet: true,
     fierceness: 4
   }, {
     animalType: "fox",      
     pet: true,
     fierceness: 10
   }, {
     animalType: "giraffe",
     pet: false,
     fierceness: 4
   }, {
     animalType: "zebra",
     pet: false,
     fierceness: 8
   }, {
     animalType: "lion",
     pet: false,
     fierceness: 10
   }
 ];


// Middlewares
app.set('view engine', 'ejs')
app.use(express.json());



/* ############## RUTAS ################  */


/* 1.1  Crea una ruta GET que: 
   - escuche en /all-pets  
   - renderice la página 'pages/all-pets' y reciba 1 objeto con 2 propiedades: 
      a) title:  con el valor "All" 
      b) animals: con referencia al arreglo animals. 
*/
app.get("/all-pets", function(req, res) {
  res.render('pages/all',{title: 'All', animals: animals})
});



/* 1.2  Crea una ruta POST que: 
   - escuche en /api/addAnimal 
   - obtenga el valor recibido del body
   - lo agregue al arreglo animals
   - la respuesta de la ruta será: "res.send("Animal: added!")

*/
app.post("/api/addAnimal",function(req,res){
  var newAnimal = req.body;
  //newAnimal.routeName = newAnimal.animalType.replace(/\s+/g, "").toLowerCase();
  console.log("Agregando nuevo animal")
  console.log(newAnimal)
  animals.push(newAnimal)
  res.send("Animal: added!")
})

/* 1.3  Crea una ruta GET que: 
   - escuche en /dog  
   - renderice la página 'pages/dog' y reciba 1 objeto con 2 propiedades: 
      a) title:  con el valor "Dog" 
      b) dog: con el valor del indice[0]
*/ 
app.get("/dog", function(req, res) {
  res.render('pages/dog',{title: 'Dog', dog: animals[0]})
});


/* 1.4  Crea una ruta GET que: 
   - escuche en /api/getAnimal/:animal
   - obtenga el valor de la ruta dinámica
   - Realice una busqueda en el arreglo 'animals' vs el valor dinámico.
   - Si hay coincidencia almacena ese objeto en alguna variable
   - renderice la página 'pages/any' y reciba 1 objeto con 2 propiedades: 
      a) title:  con el valor obtenido de la ruta dinámica
      b) animal: con la variable donde almacenaste el objeto encontrado.
*/ 
app.get("/api/getAnimal/:animal", function(req, res) {
  var chosen = req.params.animal;

  console.log(chosen);

  for (var i = 0; i < animals.length; i++) {
    if (chosen === animals[i].animalType) {
      res.render('pages/any',{title: chosen, animal: animals[i]})
    }
  }

  return res.json(false);

});
  
/*
   1.5  Escribe el codigo necesario para que el servidor escuche en el puerto 5000
*/
// 
var PORT = 5000;
// data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});