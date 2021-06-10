const {Router} = require('../utils/Router')
const loginController = require('../controller/login')



var router = new Router()


router.get('/login', loginController.getLoginHTML)
router.get('/login.html', loginController.getLoginHTML)
router.get('/styles/nav.css', loginController.getLoginCSS2)
router.get('/styles/login.css', loginController.getLoginCSS1)
router.get('/scripts/nav.js', loginController.getLoginJS)
router.get('/scripts/jquery.min.js', loginController.getcommonJS)
router.get('/products', loginController.getProducts)
router.post('/userLogin', loginController.userLogin)


///exemplu
///router.get(url_string, functieApelata)
///
module.exports.login = router