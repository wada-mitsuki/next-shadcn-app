# next-shadcn-app

Next.js × Shadcn-ui のボイラープレート

## 目次

- [使用技術について](#technology-used)
- [環境構築手順](#environment-construction-rocedure)
- [bun コマンドについて](#about-npm-command)
- [Git での運用について](#about-git-flow)

<h2 id="technology-used">使用技術について</h2>

### node バージョン

- node
  - v20.11.0
- bun
  - v1.1.17

### フロント フレームワーク

- [next]
  - v14.2.5
- [React]
  - v18

### スタイル + コード整形

- [TailwindCSS](https://tailwindcss.com/docs/installation)
  - v3.4.1
- [Prettier](https://prettier.io/docs/en/)
  - v3.3.3

### テスト関連

- [Jest](https://jestjs.io/ja/)
  - TODO

<h2 id="environment-construction-rocedure">環境構築手順</h2>

### Dev Container(リモートコンテナ)の利用について

下記理由により Dev Container(リモートコンテナ)の利用を推奨しますが、
事情があり使用できない場合はホストマシン上で構築を進めてください。

※ホストマシン上で構築する場合は、『[ローカル環境の立ち上げまで](#setting-up)』手順を飛ばして構いません。

#### 1. ローカル環境を汚さない

複数のプロジェクトで開発する内に、ローカルマシンにはそのための様々なアプリ・設定が導入されていきます。
この状態には以下のような欠点があります。

- 導入されたアプリや設定が膨大になって管理しきれなくなり、何のために導入されたか、変更してよい設定なのかが分からなくなる
- 異なるプロジェクトで必要な設定・アプリ同士が衝突し、開発に支障をきたす

コンテナ機能を用いてプロジェクトごとに異なるコンテナ内で開発することで、以上の問題は解消されます。

#### 2. 開発環境構築が容易で、再現性が高い

開発に必要なアプリ・設定がコンテナの形でまとめられているので、少ない労力で何度でも開発環境を再現できます。

たとえばローカル上で直接開発している場合、以前の開発環境で作成したビルドを再現したいのに、
現在の開発環境だと差分が発生してしまってうまくいかないことがあります。

開発環境をコード管理・バージョン管理することで、開発環境の再現が容易になります。

#### 3. 開発者間での開発環境の差異が生まれにくい

開発者間で開発環境が異なっているとチームでの開発や運用に支障をきたすことがあります。
例えば以下のようなケースが想定されます。

- 開発者Ａと開発者Ｂでビルド生成物に差異が出る
- 開発者Ａの環境で通ったテストが開発者Ｂの環境で通らない
- CI 環境と開発者の手元環境でテストが通るかどうかが異なる

開発環境をコンテナ化することで、複数の開発者が同じ開発環境で開発でき、
なおかつ開発環境の変更を明示的にコード履歴に含めることができます。

### Dev Container(リモートコンテナ)を使用する場合

1. VSCode の拡張機能『Remote Development』をインストール

   - https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

1. VSCode 左下の『><マーク』をクリック。
1. VSCode 上部に選択肢がいくつか出てくるので、その中の『コンテナーで再度開く』をクリック。
1. リモートコンテナ側の VSCode とコンテナ環境が起動すれば、『[ローカル環境の立ち上げまで](#setting-up)』の手順を進めてください。

![](./public//images/startup-devcontainer.gif)

<h3 id="setting-up">ローカル環境の立ち上げまで</h3>

```

# パッケージのインストール
$ bun install

# ローカル環境の立ち上げ
$ bun run dev
or
$ bun dev
```
