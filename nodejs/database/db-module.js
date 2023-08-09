const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');


const serviceAccount = require('./service-account-key');

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();
const collections = db.collection("book");

console.log(collections);

exports.db = db;