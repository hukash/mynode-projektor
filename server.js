require.paths.unshift(__dirname + "/vendor");

process.addListener('uncaught Exception', function(err, stack){
  console.log('---------------');
  console.log('Exception', + err);
  console.log(err, stack);
  console.log('---------------');
});

// var CouchClient = require('.lib/couchclient');

var sys = require('sys'),
    couchdb = require('node-couchdb/lib/couchdb'),
    client = couchdb.createClient(5984, 'localhost'),
    db = client.db('my-db');

db.saveDoc('my-doc', {awesome: 'couch fun'}, function(err, ok){
  if (err) throw new Error(JSON.stringify(err));
  sys.puts('Saved my first doc to the couch');
});

db.getDoc('my-doc', function(err, doc){
  if (err) throw new Error(JSON.stringify(err));
  sys.puts('Fetch my doc from couch:');
  sys.puts(sys.inspect(doc));
});
