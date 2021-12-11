import mongoose from 'mongoose';

const connectDB = async () => {
  const conn = await mongoose.connect(`${process.env.DB}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`Database connected: ${conn.connection.host}`);
};

export default connectDB;
