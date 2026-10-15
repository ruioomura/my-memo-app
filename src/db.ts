// DBファイルを開く
import Database from 'better-sqlite3';
// TODO: debug用のコンソール出力を消す
const db = new Database('memo.db', { verbose: console.log });

// memosテーブルを作る
const stmt = db.prepare(`CREATE TABLE IF NOT EXISTS memos(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    content TEXT NOT NULL,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
    updated_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
)`);
stmt.run();
// TODO: debug用のコンソール出力を消す
console.log('memosテーブルの準備ができました');

// 開いたDBを他のファイルでも使えるようにエクスポートする
export { db };