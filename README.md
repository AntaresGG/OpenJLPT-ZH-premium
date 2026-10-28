# OpenJLPT-ZH-premium

基于 [OpenJLPT](https://github.com/evanclan/OpenJLPT) 的独立中文日语学习项目，由 AntaresGG 维护。继承上游完整提交历史、静态站点架构、数据接口和来源署名，独立管理 Issue、CI 与 Release。

[![CI](https://github.com/AntaresGG/OpenJLPT-ZH-premium/actions/workflows/ci.yml/badge.svg)](https://github.com/AntaresGG/OpenJLPT-ZH-premium/actions/workflows/ci.yml)

## 当前能力

| 等级 | 中文词汇 | 中文语法 | 中文例句 |
| --- | ---: | ---: | ---: |
| N3 | 1,659 | 101 | 3,602 |
| N2 | 1,778 | 123 | 3,651 |
| N1 | 3,070 | 123 | 6,351 |

加上 N5/N4 已完成部分，共 6,707 个词汇、377 个语法点和 14,093 条中文例句。支持中文搜索、闪卡进度保存和 Shuffle，以及 JSON、CSV、SQLite、Anki 和 Yomitan 导出。N5/N4 尚未全量中文化；汉字中文释义不在当前完成范围。详见 [中文数据说明](README.zh-CN.md)。

## 获取与运行

从 [GitHub Releases](https://github.com/AntaresGG/OpenJLPT-ZH-premium/releases) 下载数据、Anki 牌组、Yomitan 词典以及 JavaScript/Python 安装包。当前独立版本为 **v0.4.0**；继承的 v0.1.0、v0.2.0 标签属于上游历史。

npm/PyPI 上的 `openjlpt` 是上游产品，不包含本项目的全部改进。本项目未发布到 npm/PyPI，使用 Release 包或源码安装：

```sh
git clone https://github.com/AntaresGG/OpenJLPT-ZH-premium.git
cd OpenJLPT-ZH-premium
npm ci
npm run build:pkg
uv run --no-project --with pytest --with genanki python -m pytest -q
```

Python 分发名为 `openjlpt-zh-premium`，导入名和 CLI 仍为 `openjlpt`。请在独立环境中使用，避免与上游同名导入包混装：

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

JavaScript 可安装 Release 中的 `.tgz` 包或 Git 仓库，然后从 `openjlpt-zh-premium` 导入；`openjlpt` CLI 命令保持兼容。

## 验证与部署

```sh
npm run check:data
npm run validate
npm run typecheck
npm test
npm run build:pkg
npm run audit:data
```

静态网站无需数据库服务。设置实际部署的 `SITE_URL`，构建站点和下载包；详细步骤见 [Mac mini 部署](docs/DEPLOY-MACOS.md)。GitHub Pages 默认关闭，现有 LAN 部署仍是运行入口。主机地址仅保存在本地配置中。

```sh
npm run build:site -- _site
uv run --no-project --with genanki python scripts/build_exports.py _site/downloads
```

## Git 治理

- 产品：`AntaresGG/OpenJLPT-ZH-premium`，`origin/main` 是唯一产品主线。
- 上游贡献通道：`AntaresGG/OpenJLPT`，保留为 Fork；不向其 main 混入产品特有改动。
- 上游：`evanclan/OpenJLPT`；`contrib/*` 从其最新 main 创建，按功能提取补丁。
- 迁移基线：`migration-baseline-2026-10-28`，对应 `f72221983fb4c970411ac9a753f6796473321164`。

执行规则见 [治理与发布](docs/GOVERNANCE.md)，贡献拆分见 [Upstream Backlog](UPSTREAM_CONTRIBUTIONS.md)。

## 来源与许可

Originally based on [OpenJLPT](https://github.com/evanclan/OpenJLPT) by Evan Clan and contributors. This project is independently maintained and adds Chinese learning content and study workflow improvements.

保留 [CC BY-SA 4.0 LICENSE](LICENSE)、[NOTICE](NOTICE.md) 与 [引用信息](CITATION.cff)。JMdict、KANJIDIC2、Waller、Tatoeba 和 KanjiVG 的来源及许可分别见 NOTICE；新创作例句不借用 Tatoeba 署名。项目名称中的 premium 不改变这些许可或数据来源。
