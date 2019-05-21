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
  res.render('issuing.ejs', req.session.pp);
});

app.get('/verifying', (req, res)=>{
  padding = {
    'y': req.session.pp.y,
    'zeta1': req.session.one.zeta1,
    'roi': req.session.one.roi,
    'omega': req.session.one.omega,
    'sigma1': req.session.one.sigma1,
    'sigma2': req.session.one.sigma2,
    'delta': req.session.one.delta
  };
  res.render('verifying.ejs', padding);
});

app.post('/setup', (req, res)=>{
  req.session.L = req.body.L;
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

app.post('/issuerExecuteTwo', (req, res)=>{
  res.json(JSON.stringify({
    'z1': req.session.pp.z1,
    'z2': req.session.pp.z2,
    'a': req.session.pp.a,
    'b1': req.session.pp.b1,
    'b2': req.session.pp.b2
  }));
});

app.post('/issuerExecuteFour', (req, res)=>{
  res.json(JSON.stringify({
    'c': req.session.one.c,
    'r': req.session.one.r
  }));
});

app.post('/userExecuteFive', (req, res)=>{
  res.json(JSON.stringify({
    'roi': req.session.one.roi,
    'omega': req.session.one.omega,
    'sigma1': req.session.one.sigma1,
    'sigma2': req.session.one.sigma2,
    'delta': req.session.one.omega
  }));
});

app.post('/issuerExecuteSix', (req, res)=>{
  res.json(JSON.stringify({
    'username': req.session.m.split('|')[0],
    'xi': req.session.pp.xi,
    'xiv': req.session.one.xiv
  }));
});

app.post('/verifyCred', (req, res)=>{
  let chunk = new ttypes.ProtocolTwo({
    'omega': req.session.one.omega,
    'delta': req.session.one.delta,
    'L': req.session.L,
    'sg': req.session.pp.sg,
    'roi': req.session.one.roi,
    'sy': req.session.pp.sy,
    'sigma1': req.session.one.sigma1,
    'sigma2': req.session.one.sigma2,
    'szeta1': req.session.one.szeta1,
    'szeta2': req.session.one.szeta2,
    'sh': req.session.pp.sh,
    'm': req.session.m
  });
  client.execTwo(chunk,(err, ret)=>{
    // console.log(ret);
    res.json(JSON.stringify(ret));
  });
});

app.post('/userExecuteThree', (req,res)=>{
  req.session.m = req.body.m;
  let chunk = new ttypes.ProtocolOne({
    't1': req.session.pp.t1,
    't2': req.session.pp.t2,
    't3': req.session.pp.t3,
    't4': req.session.pp.t4,
    't5': req.session.pp.t5,
    'gamma': req.session.pp.gamma,
    'sz1': req.session.pp.sz1,
    'sz': req.session.pp.sz,
    'sa': req.session.pp.sa,
    'sb1': req.session.pp.sb1,
    'sb2': req.session.pp.sb2,
    'sg': req.session.pp.sg,
    'sh': req.session.pp.sh,
    'sy': req.session.pp.sy,
    'M': req.body.m,
    'L': req.session.L,
    'd': req.session.pp.d,
    'u': req.session.pp.u,
    'x': req.session.pp.x,
    's1': req.session.pp.s1,
    's2': req.session.pp.s2,
    'v': req.session.pp.v,
    'sxi': req.session.pp.sxi
  });
  client.execOne(chunk,(err, ret)=>{
    req.session.one = ret;
    res.json(JSON.stringify(ret));    
  });
});

let server = app.listen(8080, ()=>{
  let host = server.address().address;
  let port = server.address().port;

  console.log("Running at " + host + ": " + port);
})

// JSONRPC.loadRouter(path.join(__dirname, ))