import { model, Schema, Document } from 'mongoose';

export default interface IBook extends Document {
  title: string;
  image?: string;
  category: string;
  description: string;
  stock: number;
  author: object
}

const bookSchema = new Schema({
  title: {
    type: Schema.Types.String,
    required: true,
  },

  image: {
    type: Schema.Types.String,
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
    lastname: {
      type: Schema.Types.String,
      required: true,
    },

    firstname: {
      type: Schema.Types.String,
       required: true,
    }

  }


});



export const BookModel = model<IBook>('Book', bookSchema);
