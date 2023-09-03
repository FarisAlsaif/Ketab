const db = require('../database/db-module');


async function isUserExist(username){

    const userRef =  db.collection("USERs").doc(username);
    const doc = await userRef.get();
    return doc.exists;

}
async function authenticateUser(username, password){
    const userRef =  db.collection("USERs").doc(username);
    const doc = await userRef.get();
    if(doc.exists){
        const user = doc.data();
        if(user.password === password){
            return true;
        }
    }
    return false;
}

module.exports = {isUserExist, authenticateUser};