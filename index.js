const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// 미들웨어
app.use(express.json());

// 팀별 라우터 연결
app.use("/team1", require("./team1"));
app.use("/team2", require("./team2"));
app.use("/team3", require("./team3"));
app.use("/team4", require("./team4"));
app.use("/team5", require("./team5"));
app.use("/team6", require("./team6"));
app.use("/team7", require("./team7"));
app.use("/team8", require("./team8"));
app.use("/team9", require("./team9"));
app.use("/team10", require("./team10"));

// 기본 라우트
app.get("/", (req, res) => {
  res.send("Hello, Incoding!");
});

// 서버 시작
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
