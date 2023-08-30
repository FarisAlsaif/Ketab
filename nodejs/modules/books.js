const  db  = require('../database/db-module');


function getBooks() {
    return collections.get();
  }
  
async function getMyBooks(username){
    console.log(typeof(username));
    const myBooksRef =  db.collection("Mybooks").doc(username);
    doc = await myBooksRef.get();
    return doc.data();
  }
  
module.exports = {getBooks, getMyBooks};