---
license: cc-by-sa-4.0
language:
- ja
- en
- zh
pretty_name: Kotowa · 词和
size_categories:
- 1K<n<10K
task_categories:
- translation
- text-classification
tags:
- jlpt
- japanese
- japanese-language
- vocabulary
- kanji
- grammar
- furigana
- language-learning
configs:
- config_name: vocab
  default: true
  data_files:
  - split: n5
    path: data/json/vocab/n5.json
  - split: n4
    path: data/json/vocab/n4.json
  - split: n3
    path: data/json/vocab/n3.json
  - split: n2
    path: data/json/vocab/n2.json
  - split: n1
    path: data/json/vocab/n1.json
- config_name: kanji
  data_files:
  - split: n5
    path: data/json/kanji/n5.json
  - split: n4
    path: data/json/kanji/n4.json
  - split: n3
    path: data/json/kanji/n3.json
  - split: n2
    path: data/json/kanji/n2.json
  - split: n1
    path: data/json/kanji/n1.json
- config_name: grammar
  data_files:
  - split: n5
    path: data/json/grammar/n5.json
  - split: n4
    path: data/json/grammar/n4.json
  - split: n3
    path: data/json/grammar/n3.json
  - split: n2
    path: data/json/grammar/n2.json
  - split: n1
    path: data/json/grammar/n1.json
---

# Kotowa · 词和

**The JLPT N5–N1 word, kanji and grammar lists: cleaned, cross-checked against JMdict, and free to use.**

About 7,800 words, 2,400 kanji and 526 grammar points, with readings, romaji, English meanings,
part of speech, JMdict IDs and example sentences (most with furigana). Every entry has a stable
ID that survives data updates. All 7,811 words and 526 grammar points also include reviewed Chinese content in `zh`; kanji meanings remain English.

- 💻 Source, docs and issue tracker: <https://github.com/AntaresGG/kotowa>
- 📦 Distribution: [GitHub Releases](https://github.com/AntaresGG/kotowa/releases). Kotowa has not been published to npm, PyPI or Hugging Face.

## Load it

Run from a local Kotowa checkout:

```python
from datasets import load_dataset

vocab = load_dataset("json", data_files={level: f"data/json/vocab/{level}.json" for level in ("n5", "n4", "n3", "n2", "n1")})
```

This card is prepared for a possible future publication; it does not identify a hosted Kotowa dataset.

## Fields

**vocab:** `id`, `word`, `reading`, `romaji`, `meanings`, `level`, `pos` (JMdict part-of-speech
codes), `jmdict_id`, `other_forms`, `other_readings`, and `examples` (Tatoeba sentences with
`ja`, `furigana` in `{漢字|かんじ}` notation, `en` and `tatoeba_id`).

**kanji:** `character`, `level`, `strokes`, `grade`, `freq`, `radical`, `radical_number`,
`onyomi`, `kunyomi`, `nanori`, `meanings`, `words`, and `supplementary` for jōyō kanji missing
from the source lists.

**grammar:** `id`, `pattern`, `reading`, `romaji`, `level`, `meaning`, `formation`, `examples`
(original sentences with reviewed furigana), `tags` and `notes`.

The full schema is in the [GitHub repository](https://github.com/AntaresGG/kotowa/tree/main/schema).

## A note on levels

The JLPT hasn't published official vocabulary, kanji or grammar lists since 2010. Word and kanji
levels follow Jonathan Waller's community lists; grammar levels follow the consensus of common
JLPT study materials. Treat every level as a well-informed approximation.

## License and attribution

CC BY-SA 4.0. Independently maintained from [OpenJLPT](https://github.com/evanclan/OpenJLPT). Built from [JMdict and KANJIDIC2](https://www.edrdg.org/) (EDRDG, CC BY-SA 4.0),
[Jonathan Waller's JLPT lists](https://www.tanos.co.uk/jlpt/) (CC BY) and
[Tatoeba](https://tatoeba.org) (CC BY 2.0 FR). See
[NOTICE.md](https://github.com/AntaresGG/kotowa/blob/main/NOTICE.md) for details, and cite
Kotowa with the repository's
[CITATION.cff](https://github.com/AntaresGG/kotowa/blob/main/CITATION.cff).
