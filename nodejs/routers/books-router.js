const express = require('express');
const router = express.Router();
const books = require('../modules/books');


router.get('/:username', async (req, res) => {
    
        const username = String(req.params.username).toLocaleLowerCase();
        res.send(await books.getMyBooks(username));  
}); 
router.post('/addbook', async (req, res) => {
        try {
                
                const { username, bookId } = req.body;
                console.log(username)
                const result = await books.addBook(username, bookId);
                res.send(result);
            } catch (error) {
                res.status(500).send({ status: 0, error: error });
            }
});
router.get('/getMyBooks/:username', async (req, res) => {
        try {
                const username = req.params.username;
                const result = await books.getMyBooks(username);
                res.send(result);
                } catch (error) {
                res.status(500).send({ status: 0, error: error });
                }
});


module.exports = router;
