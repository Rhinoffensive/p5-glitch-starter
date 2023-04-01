let express = require('express');
let http = require('http');
let fs = require('fs');
let bodyParser = require('body-parser');
let dateformat = require('dateformat');
let socket = require('socket.io');
const path = require('path');

let app = express();

// if (app.get('env') === 'development') {
//   let browserSync = require('browser-sync');
//   let bs = browserSync.create();

//   bs.init({ logSnippet: false });
//   bs.watch("public/**/*.*").on("change", bs.reload);

//   app.use(require('connect-browser-sync')(bs));
// }

app.use(express.static('public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use(express.static('public'));
app.get('/data',function(req,res){
  // res.send('<span style="white-space: pre-line">'+log+'</span>');
  res.sendFile(path.join(__dirname, 'public', 'datapage.html'));
});




// Create Server
let port = process.env.PORT || 3000;
let server = http.createServer(app).listen(port, function() {
  console.log('Listening on port ' + port + '...');
});
let log = "";

let io = socket(server);

io.sockets.on('connection', newConnection);

io.sockets.on('requestLog', function(data) {
  io.emit("logUpdated",log);
});



function newConnection(socket) {
  console.log("New connection " + socket.id);

  socket.on('esit', esitChecked);

  function esitChecked(data) {

    log+= "Connection: " + socket.id + ", Car width, height: " + data + "\n";
    io.emit("logUpdated",log);
  }
}
