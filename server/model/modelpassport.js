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
  "Pan": {
    "type": "String"
  },
  "DOB": {
    "type": "Date"
  },
  "Employment": {
    "type": "String"
  },
  "Address": {
    "type": "String"
  },
  "Emergency": {
    "type": "String"
  }
  })
module.exports = mongoose.model('passport', dataSchema,'passport')