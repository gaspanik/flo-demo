var flo = require('fb-flo'),
  fs = require('fs'),
  path = require('path');

var sourceDir = './';

var server = flo(sourceDir, { // 
    port: 8888,
    host: 'localhost',
    verbose: false,
    glob: ['**/*.js', '**/*.css']
  }
);

server.once('ready', function() {
  console.log('Ready!');
});
