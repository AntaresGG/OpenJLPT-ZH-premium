# Upstream contribution backlog

Upstream: evanclan/OpenJLPT. Contribution fork: AntaresGG/OpenJLPT. Product history starts at migration-baseline-2026-10-28; never submit product main as an upstream PR.

| ID | Proposed title / benefit | Files | Source product commit | Dependencies | Validation | Status |
| --- | --- | --- | --- | --- | --- | --- |
| PR-01 | Reject dictionary metadata as furigana readings; prevents #number annotations | scripts/lib/furigana.ts; tests/ts/furigana.test.ts | bb017aa4061ef7f83a9b40a9b3ae8ae8944dd43d | None | Regression plus upstream TypeScript suite; 57 tests passed | Submitted: [upstream #10](https://github.com/evanclan/OpenJLPT/pull/10) |
| PR-02 | Keep Python 3.9 CI on a supported Ubuntu runner | .github/workflows/ci.yml | 664bafa | None | Exact patch review; [fork CI passed](https://github.com/AntaresGG/OpenJLPT/actions/runs/40639489955) | Submitted: [upstream #11](https://github.com/evanclan/OpenJLPT/pull/11) |
| PR-03 | Preserve flashcard sessions across deck switches and reloads | site/assets/flashcards.js; scripts/build-site.ts; standalone browser regression | e9648a9 | None after manual test extraction | Deck switch/reload/Again/reset/race tests | Backlog |
| PR-04 | Add persistent shuffle mode | site/assets/flashcards.js; scripts/build-site.ts; browser tests | 81edb46 | PR-03 or independent adaptation | Current-card preservation, random selection, reload persistence | Backlog |
| PR-05 | Prevent mutation of cached Python data | openjlpt/_data.py; openjlpt/_models.py; focused tests | bb017aa | Manual port excluding Chinese schema fields | Nested mutation and cache integrity tests | Backlog |
| PR-06 | Report example coverage without rounding partial coverage to 100% | scripts/lib/readme-counts.ts; tests/ts/readme-counts.test.ts | f722219 | Manual port; no Chinese dependency | Partial/full coverage regression | Backlog |
| Product-only | Chinese content/review overlays, standalone identity and LAN deployment | sources/zh-CN; localization/export/deploy files | bb017aa, b77cffd, 32f515d, 69754ce, 24994b9, f722219 | Requires upstream design discussion | Product CI and browser tests | Not proposed as a bulk upstream PR |

For each submitted item, record branch, port SHA, upstream base SHA, PR URL and eventual merge SHA below. Do not claim performance improvements without measurements. Do not combine the content migration with maintenance fixes.

## Submitted patches

Both branches are based on upstream main 0d1d3410bec90bd4098a7c72de820543cb4f707c and are pushed only to the contribution fork. PR-01 changes two files with five added lines; PR-02 changes only the Python CI runner selection. Neither imports Chinese data or standalone release configuration. Both were submitted as public, ready-for-review PRs on 2026-10-28 with the owner's explicit authorization, following the standalone v0.4.0 release.

| Item | Contribution branch | Port SHA | Upstream PR | Merge SHA |
| --- | --- | --- | --- | --- |
| PR-01 | contrib/furigana-metadata | 01eff838de86bd63f22e972db7f2a374a58672ad | [#10](https://github.com/evanclan/OpenJLPT/pull/10) | Pending upstream review |
| PR-02 | contrib/python39-runner | 09356aa1a5afba47256f982bbe8ff941acc5b36a | [#11](https://github.com/evanclan/OpenJLPT/pull/11) | Pending upstream review |

A dependency audit during standalone setup found fast-uri 3.1.0 vulnerable; the compatible lockfile update to 3.1.9 is included in the standalone product. A separate upstream dependency update may be proposed after review.
