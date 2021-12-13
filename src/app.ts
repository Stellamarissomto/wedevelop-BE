import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';
import cors from 'cors'


// load dotenv file
dotenv.config({ path: 'src/config/config.env' });

// route file
import routes from './routes/index';

// connection to db
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


// adding morgan logger
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}


// mounte route
app.use('/v1', routes);


export default app;
