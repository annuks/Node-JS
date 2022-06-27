const express=require ('express');
const path= require('path');
const port= 8000;
const ejs= require('ejs');
const { urlencoded } = require('express');
const app= express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(urlencoded());
app.use(express.static('assets'));

// //   creating Middleware
// app.use(function (req,res,next){
//    // console.log('middleware 1 called');
//     next();
// });


// app.use(function (req,res,next){
//    // console.log('middleware 2 called');
//     next();
// });

var contactList=[
    {
        name:"Ramesh",
        phoneNo:"24687568"

    },
    {
        name:"Tony Stark",
        phoneNo:"359347690347"
    },
    {
        name:"Suresh",
        phoneNo:"87347690347"
    }
]


app.get('/', function(req,res){
    

    return res.render('home',{
        title:"Contacts List",
        contact_list:contactList
    });
});

app.get('/practice',function(req,res)
{
    return res.render('practice',{title:"Dynamic",

});
});


app.post('/create-contact',function(req,res){
    // let newContact = {
    //     name : req.body.name,
    //     phoneNo : req.body.phoneNo
    // }
    
    contactList.push(req.body);
    return res.redirect('/')
    });


app.listen(port, function(err){
    if(err){


    console.log('Error in running the server',err);}
    console.log('Express Server is Running on Port:',port)
});