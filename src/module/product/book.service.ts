import { IBook } from "./book.interface";
import Book from "./book.model";

const createBookToDB = async (book: IBook) => {
    const data = new Book(book)
    const result = await data.save()
    return result
}

const getAllBooks = async () => {
    const result = await Book.find()
    return result
}
const getSingleBooksFromDB = async (bookID: string) => {
    const result = await Book.findById(bookID)
    return result
}

const updateBookToDB = async(bookID:string, payload: Partial<IBook>) => {
    const option = {new: true, runValidators: true} //By default, Mongoose does not run validation on updates, only on document creation. Setting runValidators: true forces Mongoose to validate the update operation against the schema.
    const result = await Book.findByIdAndUpdate(bookID,payload,option)
    return result
}

export const BookService ={
    createBookToDB,
    getAllBooks,
    getSingleBooksFromDB,
    updateBookToDB
}