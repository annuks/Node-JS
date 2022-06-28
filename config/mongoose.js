//required library
const mongoose= require('mongoose');
//connect to the database
mongoose.connect('mongodb://localhost/contactlist');
//acquire the mongoose.connection(checking whether successfull or not)
const db=mongoose.connection;


//error
db.on('error',console.error.bind(console,'error connecting to db'));
//if it running
db.once('open',function(){
    console.log('Connected to the Database successfully')

});