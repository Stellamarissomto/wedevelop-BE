import  { Router, Request, Response} from 'express';
import {BookModel as Books } from '../model/book';


const router = Router();

router.get('/', async (req: Request, res: Response) => {

    try {

        const book = await Books.find()
        //.populate("author", ["_id", "firstname", "lastname"] )
        .sort("-updatedAt"); // sort by dated added. most resent at the top
    
      res.status(200).json({
        status: "success",
        results: book.length,
        books: book,
      });
        
    } catch (err) {
        console.log(err)
    }

});



router.delete('/', async (req: Request, res: Response) => {
    try {
        
        await Books.findByIdAndDelete(req.query.id);
        
        res.status(200).json({
            status: "success",
            message: "Deleted book"
        });
        
    } catch (err) {
        console.log(err)
        
    }

});

router.post('/', async (req: Request, res: Response) => {
    try {
        
        const { title } = req.body;
        
        const book = await Books.findOne({ title });

        if (!book) {
            
            const newbook = await new Books({
                title: req.body.title,
                image: req.body.image,
                category: req.body.category,
                stock: req.body.stock,
                description: req.body.description,
                author: req.body.author  
            }).save();
            
            res.status(200).json({ newbook });
         }

         if (book) {
             res.status(200).json({message: "Book already exists, Please go and update the stock inventory"})
         }
        
        
    } catch (err) {
        console.log(err)
        
    }

});




export default router;