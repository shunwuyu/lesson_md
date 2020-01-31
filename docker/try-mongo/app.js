const express = require('express')

var mongoose = require('mongoose');

const app = express()
mongoose.connect('mongodb://mongodb/test');

var kittySchema = mongoose.Schema({
  name: String
});

kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}

var Kitten = mongoose.model('Kitten', kittySchema);

app.get('/create', (req, res) => {
  var fluffy = new Kitten({ name: 'fluffy' });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
  res.send(fluffy.speak())
})

app.get('/', (req, res) => {
  Kitten.find(function (err, kittens) {
    if (err) return console.error(err);
    res.send(kittens)
  })
  // res.send('hello aa')
})

app.listen(3000, console.log('Example app listening on port 3000!'))