const fs=require('fs')
var randomstring = require("randomstring");
var qs = require('querystring');
const userModel = require("../models/users");

let loginHTML=""
let loginCSS=""
let loginJS=""

function getLoginHTML (req, res) {
 
    res.statusCode = 200
    //fs.createReadStream('index.html').pipe(res)
    var data = fs.readFileSync('./views/login.html', 'utf8');
    res.setHeader('Content-Type', 'text/html')
    res.write(data)
    res.end()
  
  // console.log(fs)
  }
  function getProducts(req,res){
    
  }
  function exempleAPI(req,res)
  {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.write(JSON.stringify({ success: true, message: 'example ran successfully' }))
    res.end()
  }
  function getLoginHTML2 (req, res) {
    try {
  
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(indexHTML)
      res.end()
    } catch (e) {
      // console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
      res.end()
    }
  }
  function getLoginCSS1 (req, res) {
    var data2 = fs.readFileSync('./views/styles/login.css', 'utf8');
    res.setHeader('Content-Type', 'text/css')
    res.write(data2)
    res.end()
  }
  
  function getLoginCSS2 (req, res) {
    var data2 = fs.readFileSync('./views/styles/nav.css', 'utf8');
    res.setHeader('Content-Type', 'text/css')
    res.write(data2)
    res.end()
  }
  function getNavbarCSS (req, res) {
    try {
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/css')
      res.write(navBarCSS)
      res.end()
    } catch (e) {
      // console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/css')
      res.write('Internal server error')
      res.end()
    }
  }
  function getcommonJS (req, res) {
    var data2 = fs.readFileSync('./views/scripts/jquery.min.js', 'utf8');
    res.setHeader('Content-Type', 'text/javascript')
    res.write(data2)
    res.end()
  }
  function getLoginJS (req, res) {
    var data2 = fs.readFileSync('./views/scripts/nav.js', 'utf8');
    res.setHeader('Content-Type', 'text/javascript')
    res.write(data2)
    res.end()
  }
  function userLogin (req, res) {
    var token = randomstring.generate({
      length: 20,
      charset: 'alphabetic'
  })
  var body = '';
  req.on('data', function (data) {
      body += data;
  });
  req.on('end', async function () {

      var POST = qs.parse(body);
      // console.log(POST.name);
      var userdata = await login(POST.email, POST.password);
      res.statusCode = 200;
      if(userdata!=null){
        res.end(JSON.stringify({ success: true, userdata: userdata, token: token}));
      } else {
        res.end(JSON.stringify({ success: false }));
      }
      
  });
  // console.log(token)
  // res.end(token)
  }

  async function login(username, password) {
    const userdata = await userModel.findOne({ email: username });
    if (userdata && password == userdata.password) {
      return userdata;
    }
  }
  module.exports = { getLoginHTML, getLoginCSS1,getLoginCSS2, getLoginJS,getcommonJS,userLogin, exempleAPI}
  
  