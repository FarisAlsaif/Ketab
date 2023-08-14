const express = require('express');
const router = express.Router();

booksSearch = "https://www.googleapis.com/books/v1/volumes?q=search+terms"

router.get('/books', (req, res) => {
    axios.get(booksSearch+req.query.search)
    .then(response => {
        res.json(response.data);
    })
    .catch(error => {
        res.status(500).json({ error: 'An error occurred while fetching data from the Google Books API.' });
    });
}); 

module.exports = router;