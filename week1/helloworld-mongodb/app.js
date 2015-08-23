var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://127.0.0.1:27017/demo';

MongoClient.connect(url, function(err, db){

    if(err) throw err;

    // Find one document in out collection
    db.collection('coll').findOne({}, function(err, doc) {

        if(err) throw err;
        // Print the result
        console.dir(doc);

        // close the db
        db.close();
    });

    // Declare success
    console.log('Called findOne!');
});