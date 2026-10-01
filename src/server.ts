// このファイルの役割：サーバーを起動し、リクエストを受け付ける

// 1. Expressを読み込む
import express from "express";

// 2. アプリ本体を作る
const app = express();
const port = 3000;

// 3. GET /api/hello で { message: "hello" } を返す
app.get("/api/hello", (req, res) => {
  res.json({ message: "hello" });
});

// 4. ポート3000で待ち受けを開始する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});