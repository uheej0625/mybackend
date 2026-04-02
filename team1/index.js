const express = require("express");
const router = express.Router();

// 예시 커스텀 엔드포인트
router.get("/", (req, res) => {
  res.send("team1 기본 엔드포인트");
});

router.get("/custom", (req, res) => {
  res.send("team1 커스텀 엔드포인트");
});

module.exports = router;
