var app = require('express').createServer();

app.configure(function() {
  app.use(methodOverride());
  app.use(bodyDecoder());
  app.use(app.router);
  app.use(staticProvider(__dirname + '/public'));
});

app.configure('development', function() {
  app.use(express.errorHandler({dumpExceptions: true, showStack: true}));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

app.get('/', function(req, res) {
  res.send("hello world");
});

app.listen(3000);
