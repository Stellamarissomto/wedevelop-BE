import { model, Schema, Document } from 'mongoose';

export default interface IAuthor extends Document {
  firstname: string;
  lastname: string;
}

const authorSchema = new Schema({
  firstname: {
    type: Schema.Types.String,
    trim: true,
    required: true,
  },

  lastname: {
    type: Schema.Types.String,
    trim: true,
    required: true,
  },

});

export const AuthorModel = model<IAuthor>('Author', authorSchema);
