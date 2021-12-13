import  { Router, Request, Response} from 'express';
import { OrderModel as Order } from '../model/order';
import {BookModel as Books } from '../model/book';



const router = Router();

router.get('/', async (req: Request, res: Response) => {

    try {
         const order = await Order.find()
        .populate("Book", ["title", "stock"])
        .sort("-updatedAt"); // sort by dated added. most resent at the top
        
        res.status(200).json({
            status: "success",
            results: order.length,
            order,  
        });
        
    } catch (err) {
        console.log(err)
    }

});





router.post('/', async (req: Request, res: Response) => {

    try {

        const book = await Books.findById(req.query.id );

        if (book) {

            if (req.body.quantity > book.stock) {

                res.status(400).json({message: "Order exceeds amount in stock"})
    
            }
    
            if (req.body.quantity < book.stock) {
                
                const neworder = new Order({
                    product: book.title,
                    quantity: req.body.quantity,
                    book: book._id
                }).save();
    

                await Books.findOneAndUpdate(
                    { _id: book._id }, 
                    {stock: book.stock - req.body.quantity},
                       {
                        new: true
                    },
                    (err, book) => {
                      if (err) {
                        console.log(err)
                        res.status(400).json({ success: false, err });
                      } 
                    
                       res.status(200).json({
                           message: "order created for this book",
                           book: book})
                    }
                  )

            }

        }
        
    } catch (err) {
        console.log(err)
        
    }

});





export default router;