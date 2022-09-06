var https = require('http');
var url = require('url');
var fs = require('fs');
let mysql = require('mysql');

https.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  // fs.readFile('demofile1.html', function(err, data) {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.write(data);
  //   return res.end();
  // });

  // fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
  //   if (err) throw err;
  //   res.write("saved")
  //   console.log('Saved!');
  // });

  // fs.open('mynewfile1.txt', 'w', function (err, file) {
  //   if (err) throw err;
  //   console.log('Saved!');
  // });


  fs.writeFile('mynewfile1.txt', 'Hello content fomr alamin!', function (err) {
    if (err) throw err;
    console.log('Saved!!!!');
  });

}).listen(8005);