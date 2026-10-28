# Repository governance and releases

## Responsibilities

| Remote | Repository | Purpose |
| --- | --- | --- |
| origin | AntaresGG/kotowa | Product main, issues, CI, releases |
| fork | AntaresGG/OpenJLPT | Contribution branches only |
| upstream | evanclan/OpenJLPT | Original project and accepted contributions |

The original working copy remains a historical/contribution checkout. The standalone checkout is the product source of truth. Full ancestors and author metadata are retained; no product history is rewritten.

## Product development

1. Fetch origin, switch to local `main`, and fast-forward from `origin/main` before starting product work.
2. Make an isolated change, preserve stable entry IDs, browser storage keys and Anki IDs.
3. Run relevant checks and review the diff. Commit directly on local `main` and push to `origin/main`; never force-push main.
4. Use main for future product work on both PC and origin. Feature branches and product PRs are only used when explicitly requested by the owner.
5. Commit/push on PC, then pull/deploy the same revision on Mac. Do not commit on Mac.

This main-only product workflow was requested by the owner on 2026-10-28 and supersedes the previous feature-branch/PR workflow. Separate upstream contribution branches are scoped to the contribution fork.

## Upstream synchronization

Fetch upstream/main and inspect changes before applying them. Apply a reviewed merge or selected `cherry-pick -x` to product main, run affected checks, then push to origin/main. No workflow merges upstream code or refreshed data automatically. The existing manual data-refresh workflow produces a review PR and retains failing outputs; treat that output as a proposal, not as the product development branch.

Keep fork/main aligned using `merge --ff-only upstream/main` only after confirming it has no unique changes. A failed fast-forward requires investigation; never reset or force-push to conceal a divergence.

## Contributions

Use separate worktrees for `contrib/*` branches rooted at the current upstream/main. Extract independent commits with `cherry-pick -x`; manually port mixed commits and record their source SHA. Run tests against the upstream baseline without product-only dependencies. Push branches to fork, not product main. Track PR URLs, dependencies, source/port/merge SHAs and status in UPSTREAM_CONTRIBUTIONS.md. After acceptance, use patch-equivalence checks before importing upstream commits.

## Release policy

The first independent version is v0.4.0; inherited v0.1.0/v0.2.0 tags remain historical upstream tags. Keep package.json, package-lock.json, pyproject.toml, openjlpt.__version__, data/json/meta.json and CITATION.cff consistent. Update CHANGELOG before creating a unique annotated tag from a CI-green main. Never move a published tag.

The release workflow publishes GitHub assets: data, Anki, Yomitan, npm tarball and Python wheel/sdist. It does not publish to npm, PyPI or Hugging Face. Public Pages hosting is disabled unless PUBLISH_PAGES=true is configured explicitly. Without SITE_URL, Yomitan updates use the standalone GitHub Release assets; LAN builds use their configured SITE_URL.

## Migration record

Baseline f72221983fb4c970411ac9a753f6796473321164 had 24 ancestors-inclusive commits and a clean working tree. Its annotated migration tag is present in both product and contribution repositories. Initial product main exactly matched this commit (empty tree diff). The 403 unique reachable blobs were checked for common private-key/token patterns with no candidates; this is a bounded pattern check, not a guarantee that all sensitive information is absent. Largest blob: 12,849,152-byte SQLite dataset. LICENSE is unchanged.

GitHub issues, PRs, stars and secrets were not copied. The original product PR in the fork is superseded by the standalone migration; its commits remain reachable through the preserved branch and migration tag.
