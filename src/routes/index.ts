import express from 'express';
import books from "./bookRoute"


const router = express.Router();



router.use('/book', books);

export default router;
