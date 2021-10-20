
var express = require("express");
var path = require("path");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// DATA
// =============================================================
var tables =[];
var waitlist =[]
// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });

  //DYNAMIC ROUTE--------------------------------DYNAMIC ROUTE
  //req is request, res is response
app.get("/:requestID", function (req,res) {
    if(req.params.requestID == "reserve"){
        res.sendFile(path.join(__dirname, "reserve.html"));
    }
    if(req.params.requestID == "tables"){
        res.sendFile(path.join(__dirname, "tables.html"));
    }

})

//------------clear
app.post("/api/clear",function(req,res){
    tables = []
    waitlist = []

})

//display all the info of tables or waitlist
app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });


  //CREATE new RESERVATIONS
  app.post("/api/tables", function(req, res) {
      //manejar si son mas de 5 tables
      if(tables.length >= 5 ){
          console.log("Sorry we are full, we have added you to the waiting list")

        //mandar el contenido a waitlist
        var newWait = req.body;
        console.log(newWait);
        waitlist.push(newWait);
        res.json(false);

      }
      else{
      
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newTable = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newTable.routeName = newTable.Nombre.replace(/\s+/g, "").toLowerCase();
  
    console.log(newTable);
  
    tables.push(newTable);
  
    res.json(true);
     
  }
    
  });
  
  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
