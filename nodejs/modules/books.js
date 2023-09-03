const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');
const  db  = require('../database/db-module');


function getBooks() {
    return collections.get();
  }
  
async function getMyBooks(username){
    const myBooksRef =  db.collection("Mybooks").doc(username);
    doc = await myBooksRef.get();
    return doc.data();
  }
  
async function addBook(username,book){
    const bookRef =  db.collection("Mybooks").doc(username);
    await bookRef.update({
      bookref: FieldValue.arrayUnion(book.bookref)
    })
    return book;
  }


module.exports = {getBooks, getMyBooks, addBook};