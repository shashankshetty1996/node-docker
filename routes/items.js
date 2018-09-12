const express = require("express");
let router = express.Router();

router.get("/test", (req, res) => {
  res.send("Item api tested");
});

router.post("/test", (req, res) => {
  res.send("Post Item api tested");
});

module.exports = router;
