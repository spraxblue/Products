
const { Router } = require('../utils/Router')
const { getAllProducts } = require('../controller/products')
const productController = require('../controller/products')
const { addProduct } = require('../controller/products')

var router = new Router()

router.get('/products',productController.productsHTML)
router.get('/products.html',productController.productsHTML)
router.get('/styles/nav.css', productController.productsCSS2)
router.get('/styles/search.css', productController.productsCSS1)
router.get('/scripts/nav.js', productController.productsJS)
router.get('/scripts/jquery.min.js', productController.getcommonJS)
router.get('/allproducts',productController.getAllProducts)
router.post('/addProduct',productController.addProduct)
router.post('/deletep',productController.deletep)
module.exports.products = router