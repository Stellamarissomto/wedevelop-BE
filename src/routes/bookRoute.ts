import  { Router, Request, Response} from 'express';
import {BookModel as Books } from '../model/book';
import { cloudiUploads } from '../utils/cloudinary';
import multer from '../utils/multer'


const router = Router();

router.get('/', async (req: Request, res: Response) => {

    try {
         const book = await Books.find()
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


router.get('/:id', async (req: Request, res: Response) => {

    try {
         const book = await Books.findById(req.params.id)
      
        res.status(200).json({
            status: "success",
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



router.post('/', multer.single("file") , async (req: Request, res: Response) => {

    try {
        const { title } = req.body;
       
        const book = await Books.findOne({title});

        if (!book) {
            
            const uploader = await cloudiUploads(`${req.file?.path}`);
 
            const newbook = await new Books({
              title: req.body.title,
              image: uploader.url,
              category: req.body.category,
              stock: req.body.stock,
              description: req.body.description,
              author: req.body.author  
            }).save();
            
            res.status(200).json({ newbook}); 
         }
         
         if (book) {
             
           await Books.findOneAndUpdate(
            { _id: book._id }, 
            {stock: JSON.parse(req.body.stock) + book.stock},
               {
                new: true
            },
            (err, book) => {
              if (err) {
                console.log(err)
                res.status(400).json({ success: false, err });
              } 
            
               res.status(200).json({ book: book } );
            }
          )
        } 
        
        
    } catch (err) {
        console.log(err)
        
    }

});


router.patch('/', async (req: Request, res: Response) => {
    try {
        await Books.findOneAndUpdate(
            { _id: req.query.id }, req.body,
               {
                new: true
            },
            (err, book) => {
              if (err) {
                console.log(err)
                res.status(400).json({ success: false, err });
              } 
            
               res.status(200).json({ book: book } );
            }
          )
        
    } catch (err) {
        console.log(err)
        
    }
})



export default router;