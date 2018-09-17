//Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
//get all the burgers

app.get("/" , function(req,res){
    db.Burgers.findAll({}).then(function(data){
        console.log("you idiot" , data);
        for (var i = 0; i < data.length; i++) {
            console.log("=====| ", data[i].dataValues , "==\n")
            
        }
        res.render("index" , {allBurgers : data});
    });

});

//insert a new burger
app.post("/api/burgers/" , function(req,res){

    db.Burgers.create({
        burger_name : req.body.burger_name,
        devoured    :  req.body.devoured
    }).then(function(data){
        // sends back the id of new inserted object into data base
        res.redirect("/");
    });  
});

//update a new burger
app.put("/api/burgers/:id", function(req,res){

    db.Burgers.update({
        devoured    : req.body.devoured
        }, {
            where : {
                id : req.params.id
            }
        }).then(function(data){
            if (data.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                console.log("nothing changed");
                // return res.status(404).end();
              } else {
                res.status(200).end();
              }
        }
    );

});

};
