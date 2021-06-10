const fs=require('fs')
const productsModel = require("../models/product");
const url = require('url');
var qs = require('querystring');

function productsHTML (req, res) {
 
  res.statusCode = 200
  //fs.createReadStream('index.html').pipe(res)
  var data = fs.readFileSync('./views/products.html', 'utf8');
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
function productsHTML2 (req, res) {
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
function productsCSS1 (req, res) {
  var data2 = fs.readFileSync('./views/styles/search.css', 'utf8');
  res.setHeader('Content-Type', 'text/css')
  res.write(data2)
  res.end()
}

function productsCSS2 (req, res) {
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
function productsJS (req, res) {
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
async function getAllProducts (req, res) {
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

async function addProduct(req, res) {
  /* req.body :*/
  var body = '';
  req.on('data', function (data) {
      body += data;
  });
  req.on('end', function () {
      var POST = qs.parse(body);
      // console.log(POST.name);
    var data = {id_product: 20, image_path: POST.img, name: POST.name, url: POST.link, descriere: POST.dec, type: POST.tag }
    const user = new productsModel(data);
    console.log(POST);
    try {
      user.save((err) => {
        if (err) {
          console.log(err)
          res.statusCode = 500
          res.end(JSON.stringify({ success: true}));
          res.end()
        } else {
          res.statusCode = 200
          res.end(JSON.stringify({ success: true}));
          res.end()
        }
      })
    } catch (e) {
      res.statusCode = 500
      res.setHeader('Content-Type', 'application/json')
      res.write(JSON.stringify({ success: false, message: 'Internal server error!' }))
      res.end()
    }
  })
}

function deletep(req, res) {
  console.log('ssssssssssssssssssssss')
  var body = '';
  req.on('data', function (data) {
      body += data;
  });
  req.on('end', async function () {
      var POST = qs.parse(body);
      var myquery = { _id: POST.id };
      try {
        await productsModel.deleteOne(myquery, function(err, obj) {
          if (err) {
            console.log(err)
            res.statusCode = 500
            res.end(JSON.stringify({ success: false}));
            res.end()
          } else {
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
// async function createProduct(req,res)

module.exports = { getAllProducts, addProduct,deletep, productsHTML, productsCSS1,productsCSS2,getcommonJS, productsJS, exempleAPI };
