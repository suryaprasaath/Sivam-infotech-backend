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
  "Pan": {
    "type": "String"
  },
  "VehicleType": {
    "type": "String"
  },
  "RegisterNumber": {
    "type": "String"
  },
  "DOB": {
    "type": "Date"
  },
  "Address": {
    "type": "String"
  }
  })
module.exports = mongoose.model('fastag', dataSchema,'fastag')