const { Router } = require('../utils/Router')
const quizResultController = require('../controller/quizResult')

var router= new Router()


router.get('/quizResult',quizResultController.getquizResultHTML)
router.get('/quizResult.html',quizResultController.getquizResultHTML)
router.get('/styles/nav.css', quizResultController.getquizResultCSS2)
router.get('/styles/quizResult.css', quizResultController.getquizResultCSS1)
router.get('/scripts/nav.js', quizResultController.getquizResultJS)
router.get('/scripts/jquery.min.js', quizResultController.getcommonJS)

router.get('/products',quizResultController.getProducts)
///exemplu
///router.get(url_string, functieApelata)
///
module.exports.quizResult = router