import app from './app';
import https from 'http';


/* ---------- setting up server ---------*/

const PORT = process.env.NODE_ENV === 'production' ? 8080 : 5000;

const server = https.createServer(app);

server.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

// handle unhanled promise rejections
process.on('unhandledRejection', (err) => {
  console.log(err);
  // close server

  server.close(() => process.exit(1));
});
