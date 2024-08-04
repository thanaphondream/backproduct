const express = require('express')
const authenticate = require('../middlewares/authenticate')
const cart = require('../constrollers/cart-constroller')
// const upload = require('../middlewares/upload')
const router = express.Router()

router.post('/cart', cart.addcart)
router.post('/cartclone/', cart.cartsclone)
// router.post('/orders/create',cart.order);

router.get('/user', authenticate, cart.userIds )
router.get('/showcarts', authenticate, cart.showcart)
router.get('/showidcart',  authenticate, cart.showcartid)

router.delete('/deletecart/:id',cart.deletecart)

router.put('/updatequantity/:id', authenticate, cart.updatecart)
router.put('/updatastart/:id', cart.upcartstatus)

router.delete('/clearcart/:id', authenticate, cart.ClearCart)

module.exports = router