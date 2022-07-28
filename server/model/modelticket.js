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
  "Address": {
    "type": "String"
  },
  "MOT": {
    "type": "String"
  },
  "Number": {
    "type": "Number"
  },
  "Datetime": {
    "type": "Date"
  }   
  })
module.exports = mongoose.model('ticketbooking', dataSchema ,'ticketbooking')