const { Router } = require('../utils/Router')
const updateProductController = require('../controller/updateProduct')

var router = new Router()


router.get('/update-product', updateProductController.getUpdateProductHTML)
router.get('/update-product.html', updateProductController.getUpdateProductHTML)
router.get('/styles/nav.css', updateProductController.getUpdateProductCSS2)
router.get('/styles/update-product.css',updateProductController.getUpdateProductCSS1)
router.get('/scripts/nav.js', updateProductController.getUpdateProductJS)
router.get('/scripts/jquery.min.js', updateProductController.getcommonJS)

router.get('/getProducts',updateProductController.getProducts)
router.post('/updateProduct',updateProductController.updateProduct)
///exemplu
///router.get(url_string, functieApelata)
///
module.exports.updateProduct = router
