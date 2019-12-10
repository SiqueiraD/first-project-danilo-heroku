require('rootpath')();

const express = require('express'),
    app = express(),
    port = process.env.PORT || 5000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

const cors = require('cors');
const db = require('api/helpers/db');
// mongoose.connect('mongodb://localhost/msgdb', {
//     useNewUrlParser: true
// });
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
const Agua = require('api/iot/models/agua.model');


// api routes
// app.use('/users', require('api/routes/user.routes'));
app.use('/agua', require('api/iot/routes/agua.routes'));
// app.use(require('api/routes/map.routes'));

app.listen(port);
console.log('Message RESTful API server started on: ' + port);


// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "POST, GET");
//   next();
// });


// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/index.html')
//   // Note: __dirname is directory that contains the JavaScript source code. Try logging it and see what you get!
//   // Mine was '/home/danilosic/Documents/Estudos/Programming/nodejs-crud' for this app.
// })

// // Note: request and response are usually written as req and res respectively.
// app.get('/hello', function (req, res) {
//   res.send('Hello World')
// })

// app.use('/almoxarifado', almoxarifadoControll)
// app.get('/almoxarifado', function (req, res) {
//   res.send('almox')
// })

// app.get('/listar', function (req, res) {
//   var cursor = db.collection('quotes').find().toArray(function (err, results) {
//     res.send(results)
//   })
// })


// app.post('/quotes', (req, res) => {
//   db.collection('quotes').save(req.body, (err, result) => {
//     if (err) return console.log(err)

//     console.log('saved to database')
//     res.redirect('/')
//   })
// })

// app.use('/iot', iotControll)








// const express = require('express');
// const bodyParser = require('body-parser')
// const app = express();
// const assert = require('assert');
// const MongoClient = require('mongodb').MongoClient

// var almoxarifadoControll = require('./almoxarifado.js')
// var iotControll = require('./IoTRouter.js')

// app.set('port', (process.env.PORT || 5000));

// app.use(bodyParser.urlencoded({ extended: true }))


// var db

// // Create a new MongoClient
// const client = new MongoClient('mongodb://dbuser:password@ds151431.mlab.com:51431/first-crud', { useUnifiedTopology: true });

// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");

//   db = client.db('first-crud');

//   client.close();
  
//   app.listen(app.get('port'), function () {
//     console.log('listening on ', app.get('port'))
//   })
// });


// Connection MongoDB to mLab (MongoLab) -----|ANTIGO|-----
// MongoClient.connect('mongodb://dbuser:password@ds151431.mlab.com:51431/first-crud', (err, database) => {
//   if (err) return console.log(err)
//   db = database
//   app.listen(app.get('port'), function () {
//     console.log('listening on ', app.get('port'))
//   })
// })
