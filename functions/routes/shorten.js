const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const db = require("../helper/database");
const shortid = require("shortid");

//generate short url
router.post("/", async (req, res) => {
  const longUrl = req.body.longUrl;
  //check longUrl
  if (validUrl.isUri(longUrl)) {
    //check this exist
    let urlsRef = db.collection("urls");
    try {
      let queryRef = await urlsRef.where("longUrl", "==", longUrl).get();
      if (queryRef.empty) {
        let code = shortid.generate(longUrl);
        let shortUrl = "https://surl.thitiphon.me/" + code;
        const result = await urlsRef.add({
          longUrl: longUrl,
          shortUrl: shortUrl,
          code: code,
          clicks: 0,
        });
        console.log("Added document with ID: ", result.id);
        res.json({
          longUrl: longUrl,
          shortUrl: shortUrl,
          code: code,
        });
      } else {
        let data = [];
        queryRef.forEach((doc) => {
          data.push(doc.data());
          console.log(doc.id, "=>", doc.data());
        });
        res.json(data[0]);
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "database error" });
    }
  } else {
    res.status(401).json({ error: "invalid url" });
  }
});

module.exports = router;
