import BookModel from "../Models/index.js";

export const createBook = async (req, res, next) => {
  const {
    book_title,
    author_name,
    publisher,
    publication_day,
    insert_day,
    update_day,
  } = req.body;

  const newBook = await BookModel.create({
    book_title,
    author_name,
    publisher,
    publication_day,
    insert_day,
    update_day,
  });
  if (!newBook)
    return "Error...."

  res.status(200).json({
    newBook,
    success: true,
    message: "Create book successfully!!!",
  });
};
export const searchBook = async (req, res, next) => {
  const searchBook = await BookModel.findById(req.params.id)
  if (!searchBook)
    return "Error...."

  res.status(200).json({
    searchBook,
    success: true,
    message: "Search book successfully...",
  });
};