const db = require('../database/db-module');


function getBooks(username, bookId) {
  db.query("SELECT * FROM userfavoritebooks WHERE user_id = ? AND book_id = ?", [username, bookId], (err, result, fields) => {
    if (err) {
      console.log('mysql not connected');
      throw err;
    }
    res.send(result);
  });
}
function addBook(username, bookId) {
  const sql = `
  INSERT INTO userfavoritebooks (user_id, book_id)
  SELECT u.user_id, ?
  FROM users u
  WHERE u.username = ?
`;
  return new Promise((resolve, reject) => {
    db.query(sql, [bookId, username], (err, result, fields) => {
      if (err) {
        console.log(err);
        reject({ status: 0, error: err });
      } else {
        resolve({ status: 1 });
      }
    });
  });
}

function getMyBooks(username) {
  const sql = `
    SELECT b.book_id 
    FROM userfavoritebooks b
    JOIN users u ON b.user_id = u.user_id
    WHERE u.username = ?
  `;

  return new Promise((resolve, reject) => {
    db.query(sql, [username], (err, result, fields) => {
      if (err) {
        console.log(err);
        reject({ status: 0, error: err });
      } else {
        resolve({ status: 1, data: result });
      }
    });
  });
}



module.exports = { getBooks, addBook, getMyBooks };