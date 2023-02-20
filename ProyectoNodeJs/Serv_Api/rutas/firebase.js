const {initializeApp,cert} = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
let serviceAccount = require(__dirname+"/../firebaseKeys.json");
initializeApp({
    credential : cert(serviceAccount)
});
console.log("inicializado");

module.exports =  getFirestore();