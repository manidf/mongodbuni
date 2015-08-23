var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://127.0.0.1:27017/demo';

MongoClient.connect(url, function(err, db){

    if(err) throw err;

    // Find one document in out collection
    db.collection('demo').findOne({}, function(err, doc) {

        assert.equal(null, err);

        // Print the result
        console.dir(doc);

        // close the db
        db.close();
    });

    // Declare success
    console.log('Called findOne!');
});

// can handle many concurrent connections, non blocking IO
