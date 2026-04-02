const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("team7 기본 엔드포인트");
});

router.get("/custom", (req, res) => {
  res.send("team7 커스텀 엔드포인트");
});

module.exports = router;
