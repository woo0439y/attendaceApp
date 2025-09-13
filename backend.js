const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// JSON 데이터 처리
app.use(bodyParser.json());

// 정적 파일 (Vite build 결과)
app.use(express.static(path.join(__dirname, "dist")));

// API 라우트 예시
app.get("/api/status", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

// SPA 라우팅 지원
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
