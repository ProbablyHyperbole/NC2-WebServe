const express = require('express');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use((req,res,next) => {
  var now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`)
  next();
});

app.get('/',(req,res) => {


  res.render('home.hbs', {
    pageTitle: 'Home Page',
    currentYear: new Date().getFullYear(),
    welcomeMessage: 'Hello and welcome to templating with express!'
});



});

app.get('/about',(req,res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
});

});

app.get('/bad',(req,res) => {
  res.send('This page aint here brah')
});


app.listen(port, ( ) => {
  console.log("Server Running on port: " + port)
});
