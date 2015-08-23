
//find one document
// mongo shell is synchronous, allows 1 process or call at time on one thread
var doc = db.call.find();

// Print the values
printJson(doc);