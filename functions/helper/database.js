const admin = require("firebase-admin");

let serviceAccount = require("./thitiph0n-url-shortener-82cde43abf49.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

let db = admin.firestore();

module.exports = db;
