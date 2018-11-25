var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/cat_app")

// added schema for a cat object
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

// set the var cat to this schema we created to create new cat objects
var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB

var paul = new Cat({
    name: " Paul",
    age: 3,
    temperament:"Grouchy"
})

paul.save(function(err, cat){
    if(err) {
        console.log("oops")
    }
    else {
        console.log("We just saved:")
        console.log(cat)
    }
});

Cat.find({},function(err,cats){
    if(err) {
        console.log("oops")
    }
    else {
        console.log("All of THE CATS:")
        console.log(cats)
    }
})

