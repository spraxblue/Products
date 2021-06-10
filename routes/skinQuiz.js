const { Router } = require('../utils/Router')
const skinQuizController = require('../controller/skinQuiz')

var router= new Router()


router.get('/skinQuiz',skinQuizController.getskinQuiztHTML)
router.get('/skinQuiz.html',skinQuizController.getskinQuizHTML)
router.get('/styles/nav.css', skinQuizController.getskinQuizCSS2)
router.get('/styles/skinQuiz.css', skinQuizController.getskinQuizCSS1)
router.get('/scripts/nav.js', skinQuizController.getskinQuizJS)
router.get('/products',skinQuizController.getProducts)
///exemplu
///router.get(url_string, functieApelata)
///
module.exports.skinQuiz = router