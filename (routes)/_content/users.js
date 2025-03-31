const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User list");
  res.get();
});

module.exports = router;
