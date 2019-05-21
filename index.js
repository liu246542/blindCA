const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');

//--------------------------------------------------------------------------
const thrift = require('thrift');
const eccrpc = require('./gen-nodejs/setup.js');
const ttypes = require('./gen-nodejs/ecc_types.js');
const options = {
  transport: thrift.TBUfferedTransport,
  protocol: thrift.TJSONProtocol,
  headers: {"Connection": "close"},
  https: false
};

let connection = thrift.createHttpConnection('localhost', 2333, options);
let client = thrift.createHttpClient(eccrpc, connection);
connection.on('error', (err)=>{
  console.error(err);
})
//============================================================================

let app = express();
app.use(cookieParser('mysession'));
app.use(session({
  secret: 'mysession',
  resave: true,
  saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.set('views', path.join(__dirname, 'static/views'))
app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
  res.render('index.ejs', {})
});

app.get('/issuing', (req, res)=>{
  res.render('issuing.ejs', {});
});

app.post('/setup', (req, res)=>{
  let chunk = new ttypes.InitParame(req.body);
  client.init(chunk,(err, ret)=>{
    req.session.pp = ret;
    res.json(JSON.stringify(ret));    
  });
});

app.post('/issuerkey', (req, res)=>{
  // console.log(req.session.pp);
  res.json(JSON.stringify({
    'x': req.session.pp.x,
    'y': req.session.pp.y,
    'z': req.session.pp.z
  }));
});

app.post('/userkey', (req, res)=>{
  res.json(JSON.stringify({
    'gamma' : req.session.pp.gamma,
    'xi' : req.session.pp.xi,
    'z' : req.session.pp.z
  }));
});

let server = app.listen(8080, ()=>{
  let host = server.address().address;
  let port = server.address().port;

  console.log("Running at " + host + ": " + port);
})

// JSONRPC.loadRouter(path.join(__dirname, ))