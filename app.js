let express = require('express');
let http = require('http');
let fs = require('fs');
let bodyParser = require('body-parser');
let dateformat = require('dateformat');
let socket = require('socket.io');
const path = require('path');

let app = express();
app.set('view engine', 'ejs');

// if (app.get('env') === 'development') {
//   let browserSync = require('browser-sync');
//   let bs = browserSync.create();

//   bs.init({ logSnippet: false });
//   bs.watch("public/**/*.*").on("change", bs.reload);

//   app.use(require('connect-browser-sync')(bs));
// }

app.use(express.static('public'));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/data', function (req, res) {
  // res.send('<span style="white-space: pre-line">'+log+'</span>');
  res.sendFile(path.join(__dirname, 'public', 'datapage.html'));
});

app.get('/live', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'livedata.html'));
});

// app.get('/result', function (req, res) {
//   res.sendFile(path.join(__dirname, 'public', 'result.html'));
// });



app.get('/results/:scale1/:scale2', function (req, res) {
  const scale1 = req.params.scale1;
  const scale2 = req.params.scale2;
  res.render('result', { scale1: scale1, scale2: scale2 });
});

// Create an API endpoint to get user_data
app.get('/api/user-data', (req, res) => {
  res.json(user_data);
});




// Create Server
let port = process.env.PORT || 3000;
let server = http.createServer(app).listen(port, function () {
  console.log('Listening on port ' + port + '...');
});
let log = "";

let io = socket(server);

io.sockets.on('connection', newConnection);

io.sockets.on('requestLog', function (data) {
  io.emit("logUpdated", log);
});


let user_data = [
  // { connection: "1", data: [1.1, 1.2] },
  // { connection: "2", data: [1.15, 1.05] },
  // { connection: "3", data: [1.2, 1.1] },
  // { connection: "4", data: [1.25, 1.15] },
  // { connection: "5", data: [1.3, 1.2] },
];

function newConnection(socket) {
  console.log("New connection " + socket.id);
  socket.on('end-experiment', (data) => {
    console.log('Received end-experiment event with data:', data);
    user_data.push({ connection: socket.id, data: data });
    // io.emit('new-data-point', { connection: socket.id, data: data });
 
  });
}
