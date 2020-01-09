const mongoose = require('mongoose');
//equivenent to: const Schema = mongoose.Schema;
// a mongoose object has a property called Schema
const { Schema } = mongoose;     

const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    title: String,   
    body: String,
    subject: String,
    recipients: [RecipientSchema],
    yes: { type: Number, default: 0 },
    no: { type: Number, default: 0 },
    _user: { type: Schema.Types.ObjectId, ref: 'User' },           // a relationship field
    dateSent: Date,
    lastResponded: Date
});


// first parameter is the name of the collection, second is the corresponding schema
mongoose.model('surveys', surveySchema);