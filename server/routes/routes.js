const express = require('express');
const router = express.Router()
const Modelpan = require('../model/modelpan');
const Modelfastag = require('../model/modelfastag');
const Modelaadhaar = require('../model/modelaadhar');
const Modelpassport = require('../model/modelpassport');
const Modelticket = require('../model/modelticket');
const Modelmobile = require('../model/modelmobile');
module.exports = router;
const mongoose = require('mongoose');
mongoose.pluralize(null);
router.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials',true);
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

router.route('/getpan').get((req, res) => {
    Modelpan.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deletepan/:id').delete((req, res, next) => {
    Modelpan.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })

  router.route('/getaadhar').get((req, res) => {
    Modelaadhaar.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deleteaadhar/:id').delete((req, res, next) => {
    Modelaadhaar.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })
  
  router.route('/getfastag').get((req, res) => {
    Modelfastag.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deletefastag/:id').delete((req, res, next) => {
    Modelfastag.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })

  router.route('/getticket').get((req, res) => {
    Modelticket.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deleteticket/:id').delete((req, res, next) => {
    Modelticket.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })

  router.route('/getmobile').get((req, res) => {
    Modelmobile.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deletemobile/:id').delete((req, res, next) => {
    Modelmobile.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })


  router.route('/getpassport').get((req, res) => {
    Modelpassport.find((error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  })
  
  router.route('/deletepassport/:id').delete((req, res, next) => {
    Modelpassport.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  })