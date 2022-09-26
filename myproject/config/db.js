const mongoose = require("mongoose");

const uri = "mongodb+srv://user_main:test123@cluster0.tq5h5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const initiateMongoServer = async () => {
    try{
        await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`Connected to Mongoose DB ...`);
    } catch(e){
        console.log(e);
        throw(e);
    }
};

module.exports = initiateMongoServer;
////OLD CODE
// mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true}).then(
//   () => {
//     console.log(`Connected to Mongoose DB ...`)
//   }
// ).catch((error) => {
//   console.log(`An error occured: ${error}`)
// })

