# OpenJLPT-ZH-premium

[English](README.md) · **日本語** · [简体中文](README.zh-CN.md)

[OpenJLPT](https://github.com/evanclan/OpenJLPT) を基に、AntaresGG が独立して保守する日本語学習プロジェクトです。簡体字中国語の学習コンテンツと学習機能を追加しています。上流のコミット履歴、出典表記、固定 ID、静的サイト構成を引き継いでいます。

[![CI](https://github.com/AntaresGG/OpenJLPT-ZH-premium/actions/workflows/ci.yml/badge.svg)](https://github.com/AntaresGG/OpenJLPT-ZH-premium/actions/workflows/ci.yml)

## データと中国語対応範囲

全収録件数と中国語対応件数は異なります。中国語未対応の項目には英語の情報が残っています。

| レベル | 語彙：中国語対応 / 全件 | 文法：中国語対応 / 全件 | 例文の中国語訳 |
| --- | ---: | ---: | ---: |
| N5 | 674 / 674 | 81 / 81 | 1,574 |
| N4 | 630 / 630 | 98 / 98 | 1,538 |
| N3 | 1,659 / 1,659 | 101 / 101 | 3,602 |
| N2 | 1,778 / 1,778 | 123 / 123 | 3,651 |
| N1 | 3,070 / 3,070 | 123 / 123 | 6,351 |
| **合計** | **7,811 / 7,811** | **526 / 526** | **16,716** |

2026-10-28 にリポジトリ内の [JSON データ](data/json)と[品質レポート](data/quality-report.json)で確認したスナップショットです。漢字は 2,383 字を収録しています。N5〜N1 の語彙と文法は全件中国語に対応し、すべての例文に中国語訳があります。漢字の中国語訳と UI 全体の中国語化は、このスナップショットでは完了していません。

- 中国語検索、間隔反復フラッシュカード、デッキ切り替え・再読み込み後の学習進捗保存、シャッフル設定の保存に対応。
- JSON・CSV・SQLite、対訳付き Anki デッキを出力。Anki の既存ノート ID を維持します。Yomitan は JLPT レベルのメタデータ辞書で、語義は含みません。
- 元の英語フィールドと固定 ID を維持し、JavaScript/TypeScript と Python の API から利用できます。
- 中国語コンテンツは所有者の承認の下、Codex が AI による執筆・校閲を実施しました。独立した人間による校閲ではありません。校閲ハッシュと出典は保守用データに記録します。古くなった中国語は学習画面やエクスポートに使用せず、英語にフォールバックします。

校閲記録と既知の制限は[中国語の保守ノート](README.zh-CN.md)を参照してください。JLPT レベルはコミュニティによる目安で、公式の出題リストではありません。

## ダウンロードとインストール

データ、Anki デッキ、Yomitan 辞書、JavaScript/Python パッケージは [GitHub Releases](https://github.com/AntaresGG/OpenJLPT-ZH-premium/releases) から取得できます。独立版は **v0.4.0** です。継承した v0.1.0・v0.2.0 タグは上流の履歴に属します。

本プロジェクトは npm/PyPI に未公開です。レジストリ上の `openjlpt` は上流製品です。本リポジトリのリリースパッケージ、またはソースを使用してください。

```sh
git clone https://github.com/AntaresGG/OpenJLPT-ZH-premium.git
cd OpenJLPT-ZH-premium
npm ci
npm run build:pkg
```

### JavaScript / TypeScript

利用先プロジェクトに本プロジェクトの Releases の `.tgz` パッケージをインストールして使用します。

```ts
import { searchVocab, getGrammar } from 'openjlpt-zh-premium';

const words = searchVocab('肥皂');
const grammar = getGrammar('N3');
```

メインのエントリーポイントは Node.js のファイルアクセスを使用します。ブラウザーでは `data/json/` の JSON をバンドルするか、静的ファイルとして配信してください。

### Python

リポジトリのルートで実行します。上流とインポート名が同じため、専用の環境にインストールしてください。

```sh
uv venv
uv pip install --python .venv/bin/python .
# Windows: uv pip install --python .venv/Scripts/python.exe .
```

```python
from openjlpt import search_vocab, get_grammar

words = search_vocab("肥皂")
grammar = get_grammar("N3")
```

配布名は `openjlpt-zh-premium`、Python のインポート名と CLI 名は引き続き `openjlpt` です。

## 検証とデプロイ

リポジトリのルートで実行します。

```sh
npm run check:data
npm run validate
npm run typecheck
npm test
npm run build:pkg
uv run --no-project --with pytest --with genanki python -m pytest -q
npm run audit:data
```

`npm run prepare:data` はコミット済みのソースを使い、変更前の値を確認しながら訂正と中国語の統合をオフラインで実行します。`npm run build` による全体更新は上流ソースのダウンロードと tar/bzip2 が必要です。上流の変更は取り込み前に確認してください。

サイトは静的で、データベースサービスは不要です。`SITE_URL` に実際の配信先 URL を設定し、ページとダウンロードを生成します。

```sh
npm run build:site -- _site
uv run --no-project --with genanki python scripts/build_exports.py _site/downloads
```

[Mac mini デプロイ手順](docs/DEPLOY-MACOS.md)を参照してください。PC でコミットして GitHub にプッシュし、Mac で同じコミットをプルして配信します。GitHub Pages は既定で無効です。ホストのアドレスはローカル設定で管理します。

## リポジトリの運用

- 製品：`AntaresGG/OpenJLPT-ZH-premium`。`origin/main` が製品の基準です。
- 貢献用 Fork：`AntaresGG/OpenJLPT`。その `main` に製品固有の変更を混ぜません。
- 上流：`evanclan/OpenJLPT`。最新の上流 `main` から独立した `contrib/*` ブランチを作成します。
- 移行基準：`migration-baseline-2026-10-28`、コミット `f72221983fb4c970411ac9a753f6796473321164`。

製品変更はローカルの `main` で行い、必要な検証後に `origin/main` へプッシュします。[運用・リリース方針](docs/GOVERNANCE.md)、[上流への貢献記録](UPSTREAM_CONTRIBUTIONS.md)、[変更履歴](CHANGELOG.md)を参照してください。

## 出典とライセンス

Evan Clan とコントリビューターによる [OpenJLPT](https://github.com/evanclan/OpenJLPT) を基に、中国語の学習内容と学習機能を独立して追加・保守しています。

[CC BY-SA 4.0 ライセンス](LICENSE)、[NOTICE](NOTICE.md)、[引用情報](CITATION.cff)を維持しています。JMdict、KANJIDIC2、Waller、Tatoeba、KanjiVG の個別の出典とライセンスは NOTICE を参照してください。新規作成した例文に Tatoeba の出典表記を流用しません。名称の「premium」はライセンスやデータの出典を変更するものではありません。
