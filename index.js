const express=require ('express');
const path= require('path');
const port= 8000;
const ejs= require('ejs');
const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));


app.get('/', function(req,res){

    return res.render('home');
// res.send('<h1>cool, it is running</h1>');
});




app.listen(port, function(err){
    if(err){


    console.log('Error in running the server',err);}
    console.log('Express Server is Running on Port:',port)
});