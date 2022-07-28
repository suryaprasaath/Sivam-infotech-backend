const express =require('express');
const mongoose = require('mongoose');
const app=express();
const bodyparser =require('body-parser');
const routes = require('./routes/routes');
app.use('/api', routes)
const Cors =require('cors');
app.use(Cors())
app.use(Cors({origin: 'http://localhost:4200'}));
var qs = require('querystring');
var MongoClient=require('mongodb').MongoClient;                                                                                                                                       
const { request } = require('http');
const url1 = "mongodb+srv://surya:lakshmanan@cluster0.lmqbx.mongodb.net/test";
const PORT=3000;
require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString);
mongoose.pluralize(null);
const database = mongoose.connection
app.use(bodyparser.json());
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials',true);
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
app.post('/registration',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("people").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("1 document inserted successfully");   
                        db.close();
                    });
            });
    res.status(200).send({"message":"Data received"});
})
app.post('/eregis/aadhar',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("aadhar").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
app.post('/eregis/fastag',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("fastag").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
app.post('/eregis/mobilerecharge',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("mobilerecharge").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
app.post('/eregis/pan',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("pan").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
app.post('/eregis/passport',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("passport").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})

app.post('/eregis/ticketbooking',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("ticketbooking").insertOne(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
app.post('/login',function(req,res){
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Password);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("people").findOne({Name:req.body.Name}, function(err, response)
                   {
                        if(err) throw err;
                        if (req.body.Password === response.Password){
                            console.log('User and password is correct');
                            res.send({"message":"positive"});
                          } else {
                            console.log("Credentials wrong");
                            res.send({"message":"negative"});
                          }         
                    });
            });
    
})
app.post('/getall1',function(req,res){
    console.log(req.body);
    console.log(req.body.Name);
    console.log(req.body.Password);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("eventregis").find({}, function(err, response)
                   {
                        if(err) throw err;
                        res.json(response);        
                    });
            });
    
})

app.post('/admin',function(req,res){
    console.log(req.body);
            MongoClient.connect(url1, function(err, db)
            {
                if(err) throw err;
                   var dbo = db.db("test");
                   dbo.collection("eventregis").find(req.body, function(err, response)
                   {
                        if(err) throw err;
                        console.log("document inserted successfully");   
                        db.close();
                    });
            });
    //res.status(200).send({"message":"Data received"});
})
// app.post('/eregis',function(req,res){
//     console.log(req.body);
// })
app.listen(PORT,function(){
    console.log("Server running");
});

