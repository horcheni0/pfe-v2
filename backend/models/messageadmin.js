// messagetoadminModel.js
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const messageAdminSchema = new Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  number: {
    type: Number
  }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageAdminSchema);
