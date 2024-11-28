import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";

const orderSchema = new Schema<TOrder>({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true
    },
    product: {
        type: String,
        required: [true, "product id is required"]
    },
    quantity: {
        type: Number,
        required: true,
    },
    totalPrice: {
        type: Number,
        required: true
    }

},
    {
        timestamps: true
    }
)

const Order = model<TOrder>('bookOrder', orderSchema)
export default Order