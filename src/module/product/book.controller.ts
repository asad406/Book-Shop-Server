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

export const BookController = {
    createBook
}