import express from 'express';
import books from "./bookRoute";
import order from './order'


const router = express.Router();



router.use('/book', books);
router.use('/order', order)

export default router;
