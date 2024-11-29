import { model, Schema } from "mongoose";
import { IBook } from "./book.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const bookSchema = new Schema<IBook>({
    password: {
        type: String,
        required: [true, 'password is required']
    },
    id: {
        type: Number,
        required: true
    },
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
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: [true, 'Category is required']
    },
    inStock: {
        type: Boolean,
        required: [true, 'Stock is required']
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
},
    {
        timestamps: true
    }
)

//pre save middleware
bookSchema.pre('save', async function (next) {
    const user = this
    user.password = await bcrypt.hash(user.password, Number(config.saltRound))
    next()
})
//post save middleware /hook
bookSchema.post('save', function (doc, next) {
    doc.password = ''
    next()
})

//query middleware
bookSchema.pre('find', function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
bookSchema.pre('findOne', function (next) {
    this.find({ isDeleted: { $ne: true } })
    next()
})
bookSchema.pre('aggregate', function (next) {
    this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
    next()
})
const Book = model<IBook>('book', bookSchema)
export default Book