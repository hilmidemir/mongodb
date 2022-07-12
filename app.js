const mongoose = require('mongoose');
// Connection URL
mongoose.connect('mongodb://localhost:27017/fruitsDB');

//create new schema and define some infos
const fruitsSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "name needed"]
  },
  rating: {
    type: Number,
    min:1,
    max:10
  },
  review: String,
});

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitsSchema
});

//
const Fruit = mongoose.model("Fruit", fruitsSchema);
const Person = mongoose.model("Person", personSchema);

const mango = new Fruit({
  name: "Mango",
  score: 4,
  review: "Decent fruit."
});
mango.save();

Person.updateOne({name: "Jhon"}, { favoriteFruit: mango}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("update success!");
  }
});

/*const fruit = new Fruit({
  name: "Bacon",
  rating: 2,
  review: "Bad taste"
});
fruit.save();*/

/***********analog insert***********/
/*const orange = new Fruit({
  name: "Orange",
  rating: 9,
  review: "Nearly perfect"
});
const banana = new Fruit({
  name: "Banana",
  rating: 10,
  review: "PErfectttt"
});*/

/***********Insrert Meethod***********/
/*Fruit.insertMany([kiwi, orange, banana], function(err) {
  if (err) {
    console.log(err);
  }else {
    console.log("Success!!!!!!!");
  }
});*/

/************ Find Method ****************/
/*Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  }else {
    mongoose.connection.close();
    fruits.forEach(function(fruit){
      console.log(fruit.name);
    });
  }
});*/

/************ Update Method ************/
/*Fruit.updateOne({_id: "62cd71336a36f0fa95f0fac9"}, {name: "Peach"}, function(err) {
  if (err) {
    console.log(err);
  }else {
    console.log("Successfully updated the document.");
  }
});*/

/************ DeleteOne Method ************/
/*Fruit.deleteOne({ name: "Bacon" }).then(function(){
    console.log("Data deleted"); // Success
  }).catch(function(error){
    console.log(error); // Failure
  });*/

/************** DeleteMany Method **********/
/*Person.deleteMany({name: "Jhon"}, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully Deleted all Jhons");
  }
})*/

/**************** Embeded Relationships **********/
