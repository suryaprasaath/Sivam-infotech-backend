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
  "Mobile": {
    "type": "String"
  },
  "Plan": {
    "type": "Date"
  },
  "Network": {
    "type": "String"
  },
  "Type": {
    "type": "String"
  }
  })
module.exports = mongoose.model('mobilerecharge', dataSchema ,'mobilerecharge')