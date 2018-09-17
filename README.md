# SequelBurger


<!-- Put the name of the project after the # -->
<!-- the # means h1  -->

<!-- Put a description of what the project is -->
Hello Full Stack! I'm here!

### SEQUEL YOUR BURGER!(https://sequelyrburger.herokuapp.com/)
<!-- make a link to the deployed site --> 
<!-- [What the user will see](the link to the deployed site) -->



# Images
<!-- take a picture of the image and add it into the readme  -->
<!-- ![image title](path or link to image) -->
![burger](https://media.giphy.com/media/WBTUlyKBVlTTa/giphy.gif)
<!-- ![[burger](./public/assets/img/YRBURGER.gif) -->

This fun project is the following sister of previous burger shop project in which connections to mysql database was made through connection.js and ORM.js callbacks.
The difference here, however, is the use of neat package "Sequelize" which essentially is an ORM and provides a set of powerful libraries to query through the data without defining tens of callback functions.

A big portion of previouse project remains unchanged while couple of necessary twicks are needed to adjust the use of sequellize.

* Config:

    * * Using only one config.Json package instead of connection.js and orm.js
* models:
    * * When using sequelize, tables will be defined in the models folder. 
* Controllers or routs:
    * * will still contain the backend routes and the server resonse plans.
* db
    * * Contains the schema and seeds file regarding our data base
* PUblic
    * * remains the same
* views:
    * * remains the same with the very minor change to access the data by using "dataValue" to access the keys in the array of data objects
    



# technology used
<!-- make a list of technology used -->
<!-- what you used for this web app, like html css -->

<!-- 
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item. 
-->
- Sequelize
- Deployment on Heroku
- mysql
- Making a server 
- javascript
- node.js
- API calls from front end to the server
- promise functions
- call backs
- error handling
- handlebars
- npm
- modular design of backend through orm, controllers, modles
- using templates for front end using handlebars



# code snippets
<!-- put snippets of code inside ``` ``` so it will look like code -->
<!-- if you want to put blockquotes use a > -->

The code shows how the table Burger is defined, It also shows the validation options that we can define for the input fields
```
module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define("Burgers", {
        burger_name : {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 140]
            }
        },
        devoured : DataTypes.BOOLEAN

        
    }, {
        timestamps: false
    });

    return Burgers;

};
```

This block of the code belonges to the model object : burger.js. The object uses the orm functions to do certain type of queries inside a specific table of "burgers" in the database.

```
var burger = {

    selectAll : function(callback){
        orm.selectAll("burgers" , function(data){
            callback(data);
        });
    },
    insertOne  : function(newBurger,callback){
        orm.insertOne("burgers",newBurger , function(data){
            callback(data);
        });
    },
    updateOne  : function(updateBurger, condition, callback){
        orm.updateOne("burgers", updateBurger, condition , function(data){
            callback(data);
        });

    }

};
```
There would be small changes in the api-routes. js file to access and manipulating data through sequel; 

* * * function "get" for the route "/" : uses "db.Burgers.findAll({})" to get all the data
```
module.exports = function(app) {
//get all the burgers

app.get("/" , function(req,res){
    db.Burgers.findAll({}).then(function(data){
        res.render("index" , {allBurgers : data});
    });

});
```
* * * function "post" uses "db.Burgers.create({...})" to adds the new burger to the list of currently available ones
```
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
```
* * * function "put" uses "db.Burgers.update({...})" to update the current data on the page
```

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

```
# Learning points
<!-- Learning points where you would write what you thought was helpful -->
- Making a server 
- javascript
- node.js
- API calls from front end to the server
- promise functions
- call backs
- error handling
- handlebars
- npm
- modular design of backend through orm, controllers, modles
- using templates for front end using handlebars




# Author 
<!-- make a link to the deployed site and have your name as the link -->
Nasibeh Nourbakhshnia
(www.linkedin.com/in/nasibehnourbakhshnia)

# License
