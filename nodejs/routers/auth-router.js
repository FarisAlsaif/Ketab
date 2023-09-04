const express = require('express');
const router = express.Router();
const auth = require('../modules/auth');

router.get('/:username', async (req, res) => {
        
          try {
            const username = String(req.params.username).toLocaleLowerCase();
            res.send(await auth.isUserExist(username));  
          } catch (error) {
            res.status(404).json({ error: 'not found' });   
          }
    }
);
// router.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const match = await auth.authenticateUser(username, password);
//         res.send(match);
//     } catch (error) {
//         res.status(401).json({ error: 'Authentication failed' });
//     }
// });
router.get('/login', function(req, res, next) {
    res.render('login');
  });


module.exports = router;
