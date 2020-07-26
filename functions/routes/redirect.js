const express = require("express");
const router = express.Router();
const db = require("../helper/database");
const validUrl = require("valid-url");

//redirect to long url
router.get("/:code", async (req, res) => {
  //check this exist
  let urlsRef = db.collection("urls");
  try {
    let queryRef = await urlsRef.where("code", "==", req.params.code).get();
    if (queryRef.empty) {
      res.json({
        error: "invalid url",
      });
    } else {
      let data = [];
      queryRef.forEach((doc) => {
        data.push(doc);
        console.log(doc.id, "=>", doc.data());
      });
      await urlsRef
        .doc(data[0].id)
        .update({ clicks: data[0].data().clicks + 1 });
      res.redirect(data[0].data().longUrl);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "database error" });
  }
});

module.exports = router;
