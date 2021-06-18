// just npm i for packages

const express= require ('express');
const path= require ('path');
let ejs = require('ejs');
const app= express();
const port= 3000;
//Import the mongoose module
var mongoose = require('mongoose');
app.use(express.static('public'));
// app.use(express.static('node_modules/bootstrap/js/src/'));

      
//Set up default mongoose connection
var mongoDB = 'mongodb://127.0.0.1/my_database';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.set('views','./views');
app.set('view engine','ejs');
// Express Middleware for serving static files






app.get('/', function(req, res) {
     var mascots = [
       { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
       { name: 'Tux', organization: "Linux", birth_year: 1996},
       { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
     ];
     var tagline = "No programming concept is complete without a cute animal mascot.";
   
     res.render('pages/index', {
       mascots: mascots,
       tagline: tagline
     });
   });

   app.get('/about',(req,res)=>{

    res.render('pages/about');
});


app.get('/contact',(req,res)=>{

  res.render('pages/contact');
});




app.listen(port, () => {
 console.log(`app is listening on port ${port}`);
});