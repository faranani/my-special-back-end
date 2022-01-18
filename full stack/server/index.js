 const express = require('express');
 const mongoose = require('mongoose')
 const bodyParser=  require ('body-parser');
 const cors    = require('cors') ;
 const db = require('./db');


 // connect to database
mongoose.connect(db.mongoURI, { useNewUrlParser: true })
.then(() => {
    console.log('connected to database')
})
.catch(error => {
    console.log(error)
})


// express app
const app = express()

app.use(express.json())


// Routes
app.use('/users', require('./routes/users'))


const port = process.env.port || 5000



app.listen(port, () =>{
 console.log(`  server is started in port ${ port}`);
})

   

   
 