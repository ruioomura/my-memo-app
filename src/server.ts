// このファイルの役割：サーバーを起動し、リクエストを受け付ける

// 1. Expressを読み込む
import express from "express";

// DBを読み込む
import { db } from "./db.js";

// 2. アプリ本体を作る
const app = express();
const port = 3000;

// 3. GET /api/hello で { message: "hello" } を返す
// app.get("/api/hello", (req, res) => {
//   res.json({ message: "hello" });
// });

// 一覧取得API GET /api/memos
app.get("/api/memos",(req, res) => {
  // SELECT文を準備する
  const stmt = db.prepare('SELECT * FROM memos ORDER BY created_at DESC');
    
  // 準備したものを実行して、全件を配列で受け取る
  const memos = stmt.all();

  // 受け取った配列をJSONで返す
  res.json(memos);
});


// 4. ポート3000で待ち受けを開始する
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});