const express = require('express');
const router = express.Router();
const books = require('../modules/books');


router.get('/:username', async (req, res) => {
    
        const username = String(req.params.username).toLocaleLowerCase;
        res.send(await books.getMyBooks(username));  
}); 
router.post('/add/:username', async (req, res) => {
        const book = req.body;
        username = String(req.params.username);
        res.send(await books.addBook(username,book));
});


module.exports = router;
