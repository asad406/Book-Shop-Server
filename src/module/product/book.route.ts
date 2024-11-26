import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router()

bookRouter.post('/', BookController.createBook)
bookRouter.get('/', BookController.getBooks)
bookRouter.get('/:bookID', BookController.getSingleBook)

export default bookRouter