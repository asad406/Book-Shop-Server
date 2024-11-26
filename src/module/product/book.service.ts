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

export const BookService ={
    createBookToDB,
    getAllBooks,
    getSingleBooksFromDB,
}