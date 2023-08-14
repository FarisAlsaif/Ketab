const express = require('express');
const path = require('path');
const cors = require('cors');
const { db } = require('./database/db-module');
const { booksRouter } = require('./modules/books');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../angular/dist/angular')));
app.use('/api', booksRouter);
// app.use(express.json());
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.send('Hello World!');
});








