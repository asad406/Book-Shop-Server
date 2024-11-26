import { Request, Response } from "express";
import { BookService } from "./book.service";

const createBook = async (req: Request, res: Response) => {
    try {
        const body = req.body
        const data = await BookService.createBookToDB(body)
        res.status(200).json({
            message: "Book created successfully",
            success: true,
            data
        })
    } catch (error) {
        res.status(404).json({
            message: "Something went wrong",
            success: false,
        })
    }
}

const getBooks = async (req: Request, res: Response) => {
    try{
        const data = await BookService.getAllBooks()
        res.status(200).json({
            message: "Retrieves all books",
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            message: "something went wrong",
            success: false
        })
    }
}
const getSingleBook = async (req: Request, res: Response) => {
    try{
        const id = req.params.bookID
        // console.log(id);
        const data = await BookService.getSingleBooksFromDB(id)
        res.status(200).json({
            message: "Retrieves one books",
            success: true,
            data
        })
    } catch (error) {
        res.status(400).json({
            message: "something went wrong",
            success: false
        })
    }
}

const updateBook = async(req:Request, res: Response) => {
   try{
    const id = req.params.bookID
    const body = req.body
    // console.log(id);
    const data = await BookService.updateBookToDB(id,body)
    res.status(200).json({
        massage: "Book update successfully",
        success: true,
        data
    })
   } catch (error) {
    res.status(404).json({
        message: "Something went wrong",
        success: false
    })
   }
}

export const BookController = {
    createBook,
    getBooks,
    getSingleBook,
    updateBook
}