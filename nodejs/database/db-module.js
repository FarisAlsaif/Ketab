const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config({path: '.env'});

const db = mysql.createConnection({
    host: process.env.HOST, 
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE
});
db.connect((err) => {
    if(err){
        console.log('mysql not connected');
        throw err;
    }
    console.log('mysql connected');
});

function get(table){
    db.query("SELECT * FROM ??",table, (err, result, fields) => {
        if(err){
            console.log('mysql not connected');
            throw err; 
        }      
        console.log(result);
    });
}



module.exports =  db ;
