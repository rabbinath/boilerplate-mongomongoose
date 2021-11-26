require('dotenv').config();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
//</Your>mongoose.connect(process.env.MONGO_URI);

let  personSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String]
});
let Person = mongoose.model('Person', personSchema);


//let Person;

const createAndSavePerson = (done) => {
  var rabiNath = new Person({name: "RabindraNath", age: 44, favoriteFoods: ["eggs", "fish", "fresh fruit"]});

  rabiNath.save(function(err, data) {
    if (err) return console.error(err);
    done(null, data)
  });
  
};
var arrayOfPeople=[{name: "TOM", age: 22, favoriteFoods: ["birds", "fish", "burgur"]} ,
{name: "Jack", age: 33, favoriteFoods: ["Pasta", "fish", "fresh fruit"]},
{name: "Monty", age: 11, favoriteFoods: ["maggie", "fish", "fresh fruit"]}
];

const createManyPeople = (arrayOfPeople, done) => {
 // done(null /*, data*/);
 Person.create(arrayOfPeople,function(err,people){
   if(err) return console.error(err);
   done(null,people);
 })


};

var personName="Monty";
const findPeopleByName = (personName, done) => {
  Person.find({name : personName},function(err,pn){
    if (err) return console.error(err);
    done(null,pn);
  })
  
};

const findOneByFood = (food, done) => {
  Person.findOne({favoriteFoods:food},function(err,person){
    if (err) return console.error(err);
    done(null,person);
  })
  
};

const findPersonById = (personId, done) => {
  Person.findById(personId,function(err,person){
    if (err) return console.error(err);
    done(null ,person);
  })
  
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  Person.findById(personId,function(err,person){
  
    if (err) return console.error(err);
    person.favoriteFoods.push(foodToAdd);
person.save((err,updatedPerson)=>{
  if (err) return console.error(err);
  done(null ,updatedPerson);

  })
})
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

Person.findOneAndUpdate({name:personName},{age:ageToSet},{new:true},(err,updatedDoc)=>{
  if(err) return console.error(err);
  done(null , updatedDoc);
});

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
