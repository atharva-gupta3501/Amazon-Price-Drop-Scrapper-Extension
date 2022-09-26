const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { MongoClient } = require('mongodb');
const initiateMongoServer = require('./config/db');
const user = require("./routes/user");
const product = require("./routes/product");
// const morgan = require('morgan');
// const cors = require('cors');

const app = express()
const port = 3000

// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors({
  allowedOrigins: [
      'http://localhost:3000'
  ]
}));

initiateMongoServer();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

console.log('Hello World!')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/user", user);
app.use("/product", product);

app.get('/products', function (req, res) {
  res.send("temp data") 
})


app.post('/products', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.send("Item Recieved");
})






// const uri = "mongodb+srv://user_main:test123@cluster0.tq5h5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//   () => {
//     console.log(`Connected to Mongoose DB ...`)
//   }
// ).catch((error) => {
//   console.log(`An error occured: ${error}`)
// })