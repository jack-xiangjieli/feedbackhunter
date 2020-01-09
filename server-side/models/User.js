const mongoose = require('mongoose');

//equivenent to: const Schema = mongoose.Schema;
const { Schema } = mongoose;        // a mongoose object has a property called Schema


const userSchema = new Schema({
    googleId: String,    //tell the mongoose to treat googleId property as a string
    credits: { type: Number, default: 0 }
});


// first parameter is the name of the collection, second is the corresponding schema
mongoose.model('users', userSchema);
