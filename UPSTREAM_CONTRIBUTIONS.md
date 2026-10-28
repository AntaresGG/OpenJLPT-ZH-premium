# Upstream contribution backlog

Upstream: evanclan/OpenJLPT. Contribution fork: AntaresGG/OpenJLPT. Product history starts at migration-baseline-2026-10-28; never submit product main as an upstream PR.

| ID | Proposed title / benefit | Files | Source product commit | Dependencies | Validation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| PR-01 | Reject dictionary metadata as furigana readings; prevents #number annotations | scripts/lib/furigana.ts; tests/ts/furigana.test.ts | bb017aa4061ef7f83a9b40a9b3ae8ae8944dd43d | None | Regression plus upstream TypeScript suite | Ready: contrib/furigana-metadata, 01eff83; 57 tests passed |
| PR-02 | Keep Python 3.9 CI on a supported Ubuntu runner | .github/workflows/ci.yml | 664bafa | None | Exact patch review; GitHub CI | Ready: contrib/python39-runner, 09356aa; clean cherry-pick |
| PR-03 | Preserve flashcard sessions across deck switches and reloads | site/assets/flashcards.js; scripts/build-site.ts; standalone browser regression | e9648a9 | None after manual test extraction | Deck switch/reload/Again/reset/race tests | Backlog |
| PR-04 | Add persistent shuffle mode | site/assets/flashcards.js; scripts/build-site.ts; browser tests | 81edb46 | PR-03 or independent adaptation | Current-card preservation, random selection, reload persistence | Backlog |
| PR-05 | Prevent mutation of cached Python data | openjlpt/_data.py; openjlpt/_models.py; focused tests | bb017aa | Manual port excluding Chinese schema fields | Nested mutation and cache integrity tests | Backlog |
| PR-06 | Report example coverage without rounding partial coverage to 100% | scripts/lib/readme-counts.ts; tests/ts/readme-counts.test.ts | f722219 | Manual port; no Chinese dependency | Partial/full coverage regression | Backlog |
| Product-only | Chinese content/review overlays, standalone identity and LAN deployment | sources/zh-CN; localization/export/deploy files | bb017aa, b77cffd, 32f515d, 69754ce, 24994b9, f722219 | Requires upstream design discussion | Product CI and browser tests | Not proposed as a bulk upstream PR |

For each submitted item, record branch, port SHA, upstream base SHA, PR URL and eventual merge SHA below. Do not claim performance improvements without measurements. Do not combine the content migration with maintenance fixes.

## Initial prepared patches

Both branches are based on upstream main 0d1d3410bec90bd4098a7c72de820543cb4f707c and are pushed only to the contribution fork. PR-01 changes two files with five added lines; PR-02 changes only the Python CI runner selection. Neither imports Chinese data or standalone release configuration. Public upstream submission is pending the owner's explicit selection; the first independent release comes first.

A dependency audit during standalone setup found fast-uri 3.1.0 vulnerable; the compatible lockfile update to 3.1.9 is included in the standalone product. A separate upstream dependency update may be proposed after review.
