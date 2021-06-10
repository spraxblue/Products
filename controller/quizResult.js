const fs=require('fs')

let getquizResulHTML=""
let getquizResulCSS=""
let getquizResulJS=""

function getquizResultHTML (req, res) {
 
    res.statusCode = 200
    //fs.createReadStream('index.html').pipe(res)
    var data = fs.readFileSync('./views/quizResult.html', 'utf8');
    res.setHeader('Content-Type', 'text/html')
    res.write(data)
    res.end()
  
  
  console.log(fs)
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
  function getquizResultHTML2 (req, res) {
    try {
  
      res.statusCode = 200
      res.setHeader('Content-Type', 'text/html')
      res.write(indexHTML)
      res.end()
    } catch (e) {
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/html')
      res.write('Internal server error')
      res.end()
    }
  }
  function getquizResultCSS1 (req, res) {
    var data2 = fs.readFileSync('./views/styles/quizResult.css', 'utf8');
    res.setHeader('Content-Type', 'text/css')
    res.write(data2)
    res.end()
  }
  
  function getquizResultCSS2 (req, res) {
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
      console.log(e)
      res.statusCode = 500
      res.setHeader('Content-Type', 'text/css')
      res.write('Internal server error')
      res.end()
    }
  }
  function getquizResultJS (req, res) {
    var data2 = fs.readFileSync('./views/scripts/nav.js', 'utf8');
    res.setHeader('Content-Type', 'text/javascript')
    res.write(data2)
    res.end()
  }
  function getcommonJS (req, res) {
    var data2 = fs.readFileSync('./views/scripts/jquery.min.js', 'utf8');
    res.setHeader('Content-Type', 'text/javascript')
    res.write(data2)
    res.end()
  }
  
  module.exports = { getquizResultHTML, getquizResultCSS1,getquizResultCSS2,getcommonJS, getquizResultJS, exempleAPI}
  
  