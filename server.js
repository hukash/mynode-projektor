require.paths.unshift(__dirname + "/vendor");

process.addListener('uncaught Exception', function(err, stack){
  console.log('---------------');
  console.log('Exception', + err);
  console.log(err, stack);
  console.log('---------------');
});

