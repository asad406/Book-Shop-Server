import { Router } from "express";
import { BookController } from "./book.controller";

const bookRouter = Router()

bookRouter.post('/', BookController.createBook)
bookRouter.get('/', BookController.getSearchBooks)
bookRouter.get('/', BookController.getBooks)
bookRouter.get('/:bookID', BookController.getSingleBook)
bookRouter.patch('/:bookID', BookController.updateBook)
bookRouter.delete('/:bookID', BookController.deleteBooks)

export default bookRouter