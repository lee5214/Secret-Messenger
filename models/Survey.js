const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema], //means an array of data using schemas
  yes: {type: Number, default: 0},
  no: {type: Number, default: 0},
  _user: {type: Schema.Types.ObjectId, ref: 'User'}, //belong to User collection
  dateSent: Date,
  lastResponded: Date,
});

mongoose.model('surveys', surveySchema);