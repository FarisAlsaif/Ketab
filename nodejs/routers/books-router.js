const express = require('express');
const router = express.Router();
const books = require('../modules/books');


router.get('/:username', async (req, res) => {
    
        res.send(await books.getMyBooks(String(req.params.username)));  
}); 
router.post('/add/:username', async (req, res) => {
        const book = req.body;
        username = String(req.params.username);
        res.send(await books.addBook(username,book));
});

module.exports = router;
