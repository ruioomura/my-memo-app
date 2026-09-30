# メモアプリ API設計

| 用途 | メソッド | パス |
| --- | --- | --- |
| 一覧取得 | GET | /api/memos |
| 新規登録 | POST | /api/memos |
| 更新 | PUT | /api/memos/:id |
| 削除 | DELETE | /api/memos/:id |

## 一覧（GET /api/memos）
- リクエスト
なし

- 成功時レスポンス
```
// 型
[
    {
    id: number,
    title: string,
    content: string,
    created_at: string,
    updated_at: string
}
]

// 例
[
    {
        "id": 2,
        "title": "勉強した",
        "content": "9:00-12:00 \n AX勉強会",
        "created_at": "2026-09-29 08:00:00",
        "updated_at": "2026-09-29 08:00:00"
    },
    {
        "id": 1,
        "title": "読書タイム",
        "content": "小説「わたしの幸せの結婚」９巻　読破",
        "created_at": "2026-09-28 08:00:00",
        "updated_at": "2026-09-28 08:00:00"
    }
]
0件のとき[]を返す
```

- エラー時

| ステータス | 条件 | レスポンス例 |
| --- | --- | --- |
| 500 Internal Server Error | DBへの読み込みに失敗 | { "message": "メモの取得に失敗しました" } |


## 新規登録（POST /api/memos）
- リクエスト
```
{
    title: string,
    content: string
}

// 例
{
    "title": "推し活",
    "content": "雑誌を買った \n 1,280円"
}
```

- 成功時レスポンス（ステータス：201 Created）
```
// 型
{
    id: number,
    title: string,
    content: string,
    created_at: string,
    updated_at: string
}

// 例
{
    "id": 3,
    "title": "推し活",
    "content": "雑誌を買った \n 1,280円",
    "created_at": "2026-09-30 08:00:00",
    "updated_at": "2026-09-30 08:00:00"
}
```

- エラー時

| ステータス | 条件 | レスポンス例 |
| --- | --- | --- |
| 400 Bad Request | タイトルが空 | { "message": "タイトルを入力してください" } |
| 400 Bad Request | 本文が空 | { "message": "本文を入力してください" } |
| 400 Bad Request | タイトルと本文が空 | { "message": "タイトルと本文を入力してください" } |
| 500 Internal Server Error | DBへの書き込みに失敗 | { "message": "登録に失敗しました" } |


## 更新（PUT /api/memos/:id）
- リクエスト
```
{
    title: string,
    content: string
}

// 例
{
    "title": "推し活",
    "content": "雑誌を買った \n 1,408円"
}
```

- 成功時レスポンス（ステータス：200 OK）
```
// 型
{
    id: number,
    title: string,
    content: string,
    created_at: string,
    updated_at: string
}

// 例
{
    "id": 3,
    "title": "推し活",
    "content": "雑誌を買った \n 1,408円",
    "created_at": "2026-09-30 08:00:00",
    "updated_at": "2026-09-30 08:30:00"
}
```

- エラー時

| ステータス | 条件 | レスポンス例 |
| --- | --- | --- |
| 400 Bad Request | タイトルが空 | { "message": "タイトルを入力してください" } |
| 400 Bad Request | 本文が空 | { "message": "本文を入力してください" } |
| 400 Bad Request | タイトルと本文が空 | { "message": "タイトルと本文を入力してください" } |
| 404 Not Found | 指定したidのメモが存在しない | { "message": "メモが見つかりません" } |
| 500 Internal Server Error | DBへの書き込みに失敗 | { "message": "更新に失敗しました" } |


## 削除（DELETE /api/memos/:id）
- リクエスト
なし

- 成功時レスポンス（ステータス：204 No Content）
なし

- エラー時

| ステータス | 条件 | レスポンス例 |
| --- | --- | --- |
| 404 Not Found | 指定したidのメモが存在しない | { "message": "メモが見つかりません" } |
| 500 Internal Server Error | DBへの書き込みに失敗 | { "message": "削除に失敗しました" } |

