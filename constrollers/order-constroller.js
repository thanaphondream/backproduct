const db = require("../models/db");

exports.createOrder = async (req, res) => {
    const { paymentId,userId, status } = req.body;
    try {
      const order = await db.order.create({
        data: {
          userId,
          status,
        },
      });
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
 

  exports.orders = async (req, res, next) => {
      const { cartcloneId, date, userId, status } = req.body;
      console.log("dd",cartcloneId, date, userId, status )
      try {
        const newOrder = await db.order.create({
          data: {
            date: new Date(date),
            status,
            userId: userId,
            orderCarts: {
              create: cartcloneId.map(id => ({ cartcloneId: id })) 
            }
          }
        });
    
        console.log('New Order:', newOrder);
        res.json(newOrder);
      } catch (error) {
        next(error);
      }
    };

    // exports.orderGet = async (req, res, next) => {
    //   try {
    //     const orders = await db.orderCarts.findMany({
    //       include: {
    //         cart: {
    //           include: {
    //             product: true
    //           }
    //         }
    //       },
    //     });
    //     console.log('Fetched Orders:', orders); 
    //     res.status(200).json(orders);
    //   } catch (err) {
    //     console.error('Error fetching orders:', err); 
    //     res.status(500).json({ error: 'Something went wrong while fetching orders.', details: err.message });
    //     next(err);
    //   }
    // };

exports.ordershowallpay = async (req, res, next) => {
  try{
    const orders = await db.order.findMany({
      where: {
        userId: req.user.id
      },include:{
        orderCarts: {
          include: {
            cartclone: {
              include: {
                product: true
              }
            }
          }
        }
      }
      });
      res.json(orders)
  }catch(err){
    next(err)
  }
}
  
