const mongoose = require('mongoose');

//equivenent to: const Schema = mongoose.Schema;
// a mongoose object has a property called Schema
const { Schema } = mongoose;        

const recipientSchema = new Schema({
    email: String,   
    responded: { type: Boolean, default: false }
});


// first parameter is the name of the collection, second is the corresponding schema
module.exports = recipientSchema;