const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://dbuser:password@ds151431.mlab.com:51431/first-crud';

// Create a client, passing in additional options
const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


// Use connect method to connect to the server
const inserir = (obj, tabela) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected correctly to server");
        var collection = client.db('first-crud').collection(tabela);
        collection.insertOne(obj, (err, result) => {
            if (err) {
                console.log(err)
            } else {
                console.log('Nivel: saved to database')
            }
            return;
        })
        client.close();
    })
};


// Use connect method to connect to the server
const listar = (obj, n) => {
    client.connect(function (err) {
        assert.equal(null, err);
        console.log("Connected correctly to server");

        client.close();
    })
};

module.exports = {
    inserir,
    listar
}