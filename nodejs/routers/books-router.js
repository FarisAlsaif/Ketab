const express = require('express');
const router = express.Router();
const books = require('../modules/books');


router.get('/:username', async (req, res) => {
    
        const username = String(req.params.username).toLocaleLowerCase;
        res.send(await books.getMyBooks(username));  
}); 


module.exports = router;
