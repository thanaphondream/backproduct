const express = require('express')
const constroller = require("../constrollers/auth-constroller")
const authenticate = require('../middlewares/authenticate')

// const { addproduct } = require('../constrollers/addmin-constroller')
// const upload = require('../middlewares/multer')
const router = express.Router()



router.post('/register', constroller.register)
router.post('/login',constroller.login)
router.get('/me',authenticate,constroller.getme)

// router.post("/addproduct", authenticate,upload.single('image'), addproduct);

// router.get('/hello',(req, res) => {
//     res.json({msg: 'hello'})
// })
module.exports = router