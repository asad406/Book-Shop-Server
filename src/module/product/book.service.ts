import { IBook } from "./book.interface";
import Book from "./book.model";

const createBookToDB = async (book: IBook) => {
    const data = new Book(book)
    const result = await data.save()
    return result
}

export const BookService ={
    createBookToDB
}