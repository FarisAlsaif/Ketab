const express = require('express');
const jwt = require('jsonwebtoken');
const md5 = require('md5');


const router = express.Router();
const db = require('../database/db-module');

router.post('/register', async function (req, res, next) {
    try {
        let { username, email, password } = req.body;

        const hashed_password = md5(password.toString())
        const checkUsername = `Select username FROM users WHERE username = ?`;
        db.query(checkUsername, [username], (err, result, fields) => {
            if (!result.length) {
                const sql = `Insert Into users (username, email, password) VALUES ( ?, ?, ? )`
                db.query(
                    sql, [username, email, hashed_password],
                    (err, result, fields) => {
                        if (err) {
                            res.send({ status: 0, data: err });
                        } else {
                            let token = jwt.sign({ data: result }, 'secret')
                            res.send({ status: 1, data: result, token: token });
                        }

                    })
            }
        });
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});
router.post('/login', async function (req, res, next) {
    try {
        let { username, password } = req.body;

        const hashed_password = md5(password.toString())
        const sql = `SELECT * FROM users WHERE username = ? AND password = ?`
        db.query(
            sql, [username, hashed_password],
            function (err, result, fields) {
                if (err || !result.length) {
                    res.send({ status: 0, data: err });
                } else {
                    let token = jwt.sign({ data: result }, 'secret')
                    res.send({ status: 1, data: result, token: token });
                }

            })
    } catch (error) {
        res.send({ status: 0, error: error });
    }
});


module.exports = router;