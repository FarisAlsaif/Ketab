const express = require('express');
const router = express.Router();
const books = require('../modules/books');


router.get('/books/:username', async (req, res) => {
    
        res.send(await books.getMyBooks(String(req.params.username)));  
}); 

module.exports = router;
