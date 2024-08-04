const db = require("../models/db");

exports.payment = async (req, res, next) => {
    try{
        const { date, userId, status, all_price,orderId } =req.body
        console.log("dfsf112211",date, userId, status, all_price)

        const payment = await db.payment.create({
            data: {
                date: new Date(date),
                user: {
                    connect: {
                        id: userId
                    }
                },
                status: status,
                all_price: all_price,
                order: {
                    connect: {
                        id: orderId
                    }
                }
            }
        })
        res.json({ message: "Payment successful", payment })
    }catch(err){
        next(err)
    }
}
