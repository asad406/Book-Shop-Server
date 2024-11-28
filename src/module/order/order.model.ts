import { model, Schema } from "mongoose";
import { TOrder } from "./order.interface";
import Book from "../product/book.model";

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
orderSchema.pre('save', async function (next) {
    //find the product by id
    const product = await Book.findById(this.product) // it's come from 11 no line
    if(!product){
        throw new Error("Product not found")
    }
    if(product.quantity < this.quantity) {
        throw new Error('Insufficient stock')
    }
    if(product.quantity > 0) {
        product.inStock = true
    }
    product.quantity -= this.quantity
    if(product.quantity === 0){
        product.inStock = false
    }
    await product.save()
    next()
})

const Order = model<TOrder>('bookOrder', orderSchema)
export default Order