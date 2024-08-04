const express = require('express')
const authenticate = require('../middlewares/authenticate')
const payment = require('../constrollers/payment-constrollet')
const router = express.Router()


router.post('/payments', payment.payment)



// router.post('/orders', payment.order)


module.exports = router