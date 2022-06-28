const express=require ('express');
const path= require('path');
const port= 8000;
const db=require('./config/mongoose');
const Contact=require('./models/contact')

const ejs= require('ejs');
const { urlencoded } = require('express');
const { create } = require('./models/contact');
const e = require('express');
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

// var contactList=[
//     {
//         name:"Ramesh",
//         phoneNo:"24687568"

//     },
//     {
//         name:"Tony Stark",
//         phoneNo:"359347690347"
//     },
//     {
//         name:"Suresh",
//         phoneNo:"87347690347"
//     }
// ]


app.get('/', function(req,res){
    
    Contact.find({}, function (err,contacts){
        if(err){
            console.log('Error in fetching from database');
            return;
        }
    
        return res.render('home',{
            title:"Contacts List",
            contact_list:contacts
        });
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
    
    // contactList.push(req.body);

    Contact.create ({
        name:req.body.name,
        phoneNo:req.body.phoneNo
        

    },  
    function (err,newContact){
        if(err){console.log('error in creating a contact');
        return;}
        console.log('******',newContact);
    return res.redirect('back');
    });
});



app.get('/delete-contact',function(req,res){
     //console.log(req.query);
    // let phoneNo=  req.params.phone;
    // by query parameter

    // get the id in query from url

    
    let id=  req.query.id;
//find the contact in the database using id and delete
     Contact.findByIdAndDelete(id,function(err){
        if(err){
            console.log('Error in deleting data from database');
            return;
        }
        return res.redirect('back');
     });
    


});

app.listen(port, function(err){
    if(err){
    console.log('Error in running the server',err);
    }
    console.log('Express Server is Running on Port:',port);
})