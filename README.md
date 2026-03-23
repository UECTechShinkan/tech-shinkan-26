# tech-shinkan-26

## 現在の前提

- このプロジェクトは `https://uectechshinkan.github.io/tech-shinkan-26/` 配下で動く設定になっています。
- `vite.config.js` の `base` は `/tech-shinkan-26/`。
- `package.json` の `homepage` は `https://uectechshinkan.github.io/tech-shinkan-26/`。
- デプロイコマンドは `npm run deploy`（内部で build 済み）。

## あなたがやること（GitHub側）

### 1) オーガニゼーションに新規リポジトリ作成

- 組織: `UECTechShinkan`
- リポジトリ名: `tech-shinkan-26`
- 公開設定: Public

### 2) あなたのアカウントに Push 権限を付与

- `UECTechShinkan/tech-shinkan-26` に Write 以上の権限が必要です。

### 3) ルート転送先を 2026 に切り替え

- リポジトリ `UECTechShinkan/uectechshinkan.github.io` の `index.html` にある
	`window.location.href = "/tech-shinkan-25/";`
	を
	`window.location.href = "/tech-shinkan-26/";`
	に変更してマージします。

### 4) 必要なら Pages の公開元を確認

- `UECTechShinkan/tech-shinkan-26` の Settings > Pages で
	`gh-pages` ブランチ公開になっていることを確認。

## こちらで実行すること（ローカル）

権限付与後、以下を実行します。

```bash
git remote set-url origin https://github.com/UECTechShinkan/tech-shinkan-26.git
npm install
npm run deploy
```

## ローカル確認

```bash
npm run dev
```

- 通常は `http://localhost:3000/tech-shinkan-26/` で確認できます。

