import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";

const bookSchema = new Schema<IBook>({
    title: {
        type: String,
        required: [true, "Title required"]
    },
    author: {
        type: String,
        required: [true, 'Author is required']
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious']
    },
    description: {
        type: String,
        required: [true, 'Category is required']
    },
    inStock: {
        type: Boolean,
        required: [true, 'Stock is required']
    }
},
    {
        timestamps: true
    }
)
const Book = model<IBook>('book', bookSchema)
export default Book