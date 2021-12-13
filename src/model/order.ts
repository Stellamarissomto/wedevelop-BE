import { model, Schema, Document } from 'mongoose';

export default interface IOrder extends Document {
  product: string;
  quantity: number;
  book: number;
}

const orderSchema = new Schema({
  product: {
    type: Schema.Types.String,
    required: true,
  },


  quantity: {
    type: Schema.Types.Number,
    required: true,
  }, 

  book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Book"

  }
  

});



export const OrderModel = model<IOrder>('Order', orderSchema);
