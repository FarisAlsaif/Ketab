const express = require('express');
const router = express.Router();
const auth = require('../modules/auth');

router.get('/:username', async (req, res) => {
        
            const username = String(req.params.username).toLocaleLowerCase();
            res.send(await auth.isUserExist(username));  
    }
);
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        console.log(username, password);

        const match = await auth.authenticateUser(username, password);

        res.send(match);
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
});


module.exports = router;
