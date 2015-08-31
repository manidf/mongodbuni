var express = require('../node_modules/express'),
    app = express(),
    cons = require('../node_modules/consolidate'),
    MongoClient = require('../node_modules/mongodb').MongoClient,
    Server = require('../node_modules/mongodb').Server;

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

var mongoclient = new MongoClient(new Server("localhost", 27017));
var db = mongoclient.db('course');

app.get('/', function(req, res){

    // Find one document in our collection
    db.collection('hello_mongo_express').findOne({}, function(err, doc) {

        if(err) throw err;

        res.render('hello', doc);
    });
});

app.get('*', function(req, res){
    res.send('Page Not Found', 404);
});

mongoclient.open(function(err, mongoclient) {

    if(err) throw err;

    app.listen(8080);
    console.log('Express server started on port 8080');
});
