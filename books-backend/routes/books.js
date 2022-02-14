const express = require("express");
const router = express.Router();
const {
  getBook,
  getBooks,
  updateBook,
  DeleteBook,
  createBook,
} = require("../controllers/books");

router.route("/book").get(getBook);
router.route("/books").get(getBooks);
router.route("/books").post(createBook);
router.route("/book").put(updateBook);
router.route("/books").delete(DeleteBook);
module.exports = router;
