import dotenv from "dotenv";
import mongoose from "mongoose";
const BookSchema = mongoose.Schema({
  book_id: {
    type: String,
    require: true,
  },
  book_title: {
    type: String,
    required: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  publication_day: {
    type: Date,
    required: true,
  },
  insert_day: {
    type: Date,
    required: true,
  },
  update_day: {
    type: Date,
    required: true,
  },
});
const BookModel = mongoose.model("Book", BookSchema);
export default BookModel;
