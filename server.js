require.paths.unshift(__dirname + "/vendor");

process.addListener('uncaught Exception', function(err, stack){
  console.log('---------------');
  console.log('Exception', + err);
  console.log(err, stack);
  console.log('---------------');
});

var redis = require('redis'),
    client = redis.createClient();
var result = "empty";

client.on('error', function (err) {
  console.log("Redis connection error to " + client.host + ":" + client.port + " - " + err);
});

client.set("some key", "some val", redis.print);
client.set("server:name", "fido", redis.print);
client.get("server:name", function(err, reply) {
  if (err) {
    console.log("Error: " + err);
  }
  else {
    result = reply;
    console.log("Result: " + result);
  }
  client.end();
});
