const assert = require('assert');
const router = require('express').Router()
const MongoClient = require('mongodb').MongoClient

var nivel

var db = require('./mongoDB')
// Create a new MongoClient
const client = new MongoClient('mongodb://dbuser:password@ds151431.mlab.com:51431/first-crud', {
    useUnifiedTopology: true
});


router.get('/', function (req, res) {
    res.render(nivel, "")
    res.send('Almoxarifado home page')
})

router.post('/', function (req, res) {
    db.inserir(req.body, 'nivel')
    // client.connect(function (err) {
    //     assert.equal(null, err);
    //     console.log("Connected successfully to server");

    //     var collection = client.db('first-crud').collection('nivel');
    //     collection.insertOne(req.body, (err, result) => {
    //         client.close();
    //         if (err) {
    //             console.log(err)
    //             res.send('insertOne;error')
    //         } else {
    //             console.log('Nivel: saved to database')
    //             res.send('post completo')
    //         }
    //         return;
    //     })
    // });
})

router.post('')

module.exports = router