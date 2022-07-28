const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    "_id": {
      "$oid": {
        "type": "ObjectId"
      }
    },
    "type": {
      "type": "String"
    },
    "Name": {
      "type": "String"
    },
    "Mobile": {
      "type": "String"
    },
    "Email": {
      "type": "String"
    },
    "Aadhaar": {
      "type": "String"
    },
    "DOB": {
      "type": "Date"
    },
    "Address": {
      "type": "String"
    },
    "Photo": {
      "type": "String"
    }
  })
module.exports = mongoose.model('aadhar', dataSchema ,'aadhar')