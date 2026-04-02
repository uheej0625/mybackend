const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("team6 기본 엔드포인트");
});

router.get("/custom", (req, res) => {
  res.send("team6 커스텀 엔드포인트");
});

module.exports = router;
