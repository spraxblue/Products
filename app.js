const { Router } = require('./utils/Router')
const { WebApp } = require('./utils/WebApp')
const constants = require('./utils/constants')
const { index } = require('./routes')
const { login } = require('./routes/login')
const { addProduct } = require('./routes/addproductPage')
const { myAccount } = require('./routes/myaccount')
const { search } = require('./routes/search')
const { admin } = require('./routes/admin')
const { docs } = require('./routes/docs')
const {quizResult} = require("./routes/quizResult")
const {skinQuiz} = require("./routes/skinQuiz")
const { updateProduct } = require('./routes/updateProduct')
const userRouter = require("./routes/users")
const productRouter = require("./routes/products")
const { products } = require('./routes/products')

require("./server-conn");
const router = new Router()
router.use('', index)
router.use('', login)
router.use('', myAccount)
router.use('', search)
router.use('',addProduct)
router.use('',admin)
router.use('',updateProduct)
router.use('',docs)
router.use('',userRouter)
router.use('',productRouter)
router.use('',quizResult)
router.use('',products)
router.use('',skinQuiz)
// console.log(router)
const app = new WebApp(constants.port, router)
app.listen()

console.log()