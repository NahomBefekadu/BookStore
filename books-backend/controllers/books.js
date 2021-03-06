const db = require("../db");
const { StatusCodes } = require("http-status-codes");

//Insert Section
const createBook = async (req, res) => {
  const statement = `INSERT INTO books (book_name,summary,author,isbn,publishing_year,genre)
    VALUES
    ($1,$2,$3,$4,$5,$6);`;
  const values = [
    req.body.book_name,
    req.body.summary,
    req.body.author,
    req.body.isbn,
    req.body.publishing_year,
    req.body.genre,
  ];
  //console.log(query(statement, values));

  const results = await db.query(statement, values);
  //.log(results.rows[0]);

  res.status(StatusCodes.CREATED).json({
    msg: "Query completed created Book Successfully",
    request: values,
  });
};
//Delete Section
const DeleteBook = async (req, res) => {
  const statement = `DELETE FROM books WHERE book_id = $1;`;
  const values = [req.query.book_id];
  console.log("hello", req.params);
  const results = await db.query(statement, values);
  if (!results) {
    throw new CustomError.NotFoundError(`Could not find selected Book`);
  }
  res.status(StatusCodes.OK).json({
    msg: "Query completed Deleted Book Successfully",
    resa: values,
  });
};
// Patch Section
const updateBook = async (req, res) => {
  const statement = `UPDATE books SET book_name= $1,summary= $2,author= $3,isbn= $4,publishing_year= $5,genre= $6 where book_id = $7`;
  const values = [
    req.body.book_name2,
    req.body.summary2,
    req.body.author2,
    req.body.isbn2,
    req.body.publishing_year2,
    req.body.genre2,
    req.query.book_id,
  ];
  const results = await db.query(statement, values);
  if (!results) {
    throw new CustomError.NotFoundError(`Could not find selected Book`);
  }
  res.status(StatusCodes.OK).json({
    msg: "Query completed updated Book Successfully",
  });
};

//get Section
const getBooks = async (req, res) => {
  const statement = `select * from books;`;
  const values = [];
  const results = await db.query(statement, values);
  if (!results) {
    throw new CustomError.NotFoundError(`No Books Found`);
  }
  res.status(StatusCodes.OK).json({
    msg: "Query completed retrieved books successfully",
    Books: results.rows,
  });
};
// Get Section
const getBook = async (req, res) => {
  const statement = `select * from books where book_id = $1;`;
  const values = [req.query.book_id];
  const results = await db.query(statement, values);
  if (!results) {
    throw new CustomError.NotFoundError(`No book found`);
  }
  res.status(StatusCodes.OK).json({
    Book: results.rows[0],
  });
};

module.exports = {
  getBook,
  getBooks,
  updateBook,
  DeleteBook,
  createBook,
};
