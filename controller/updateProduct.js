const fs = require('fs')
var qs = require('querystring');
const productsModel = require("../models/product");

function getUpdateProductHTML (req, res) {
 
  res.statusCode = 200
  //fs.createReadStream('Admin.html').pipe(res)
  var data = fs.readFileSync('./views/update-product.html', 'utf8');
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
function getUpdateProductCSS1 (req, res) {
  var data2 = fs.readFileSync('./views/styles/update-product.css', 'utf8');
  res.setHeader('Content-Type', 'text/css')
  res.write(data2)
  res.end()
}

function getUpdateProductCSS2 (req, res) {
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
function getUpdateProductJS (req, res) {
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

async function updateProduct(req, res) {
  /* req.body :*/
  var body = '';
  req.on('data', function (data) {
      body += data;
  });
  req.on('end', function () {
      var POST = qs.parse(body);
      // console.log(POST.name);
      console.log('ssssssssssssssssssssssssssssss')
      
    try {
      productsModel.findOneAndUpdate({_id: POST._id}, {$set: {image_path: POST.img, name: POST.name, url: POST.link, descriere: POST.dec, type: POST.tag}}, {upsert: true}, function(err,doc) {
        if (err) {
          console.log(err)
            res.statusCode = 500
            res.end(JSON.stringify({ success: false}));
            res.end()
         }
            else { 
              res.statusCode = 200
            res.end(JSON.stringify({ success: true}));
            res.end()
             }
           });
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ success: false, message: 'Internal server error!' }))
      res.end()
    }
  })
}
async function getProducts(req, res) {
    res.setHeader("Content-Type", "application/json");
    try {
      const products = await productsModel.find({});
      res.statusCode = 200;
      res.end(JSON.stringify({ success: true, products }));
    
     
    } catch (err) {
      console.log(err);
      res.statusCode = 500;
       res.end(
        JSON.stringify({ success: false, message: "Internal server error" })
      );
     
    
    }
  }
module.exports = { getUpdateProductHTML,getProducts, getUpdateProductCSS1,getUpdateProductCSS2,getcommonJS,updateProduct, getUpdateProductJS, exempleAPI}

