import { model, Schema, Document } from 'mongoose';

export default interface IBook extends Document {
  title: string;
  image: string;
  category: string;
  description: string;
  stock: number;
  author: string
}

const bookSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },

  image: {
    type: Schema.Types.String,
    required: true,
  },

  description: {
    type: Schema.Types.String,
    required: true,
  },

  category: {
    type: Schema.Types.String,
    required: true,
  },

  stock: {
    type: Schema.Types.Number,
    required: true,
  }, 
  
  author: {
    type: Schema.Types.String,
    required: true,

  }


});



export const BookModel = model<IBook>('Book', bookSchema);
