# メモアプリ DB設計

## メモテーブル
table_name: memos
| カラム | 型 | 必須 | note |
| --- | --- | --- | --- |
| id | integer | 〇 | メモのID、自動採番、主キー |
| title | text | 〇 | タイトル |
| content | text | 〇 | メモの本文 |
| created_at | text | 〇 | "YYYY-MM-DD HH:MM:SS"、UTCで保存、DEFAULT CURRENT_TIMESTAMP設定 |
| updated_at | text | 〇 | "YYYY-MM-DD HH:MM:SS"、UTCで保存、DEFAULT CURRENT_TIMESTAMP設定、更新時はUPDATE文で現在時刻を指定する |
