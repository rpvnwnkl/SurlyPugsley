# Remaining work — September 29, 2026

The intended product is an owner's reference supported by personal stories, with collected archival material available to readers. The original editorial hit list is substantially complete, but not fully finished.

## Prepared together on the existing working branch

- Consistent owner-reference and archive identity across Home, About and footer.
- Restored 2010 archive presentation, six additional reading copies, source records, downloads and a coverage guide.
- Updated repository README and this queue.

These changes require review and merge before they appear on the live site. Build and link verification belong to the review record; this list does not claim publication.

## Next small batches

1. **Repository cleanup:** narrow the GitHub deletion restriction before deleting completed branches. Keep `main` and `gh-pages` protected. Retire the obsolete `content-updates` deployment trigger. Do not remove unfinished work.
2. **Finish the source introduction:** add title, publisher, date and preservation context to the Dave Gray interview's reading presentation without changing the captured original. Source introductions elsewhere have already been improved; check consistency across the new entries.
3. **Owner story — deferred by the owner:** review “The accidental Pugsley,” select a photograph and confirm any details that matter. The draft remains in the ChatGPT project workspace; it is not published.
4. **Archive expansion:** pursue Pug Ops and missing images; compare early captures before assigning model-year labels. Complete annual coverage has not been established and is not promised by this batch.

## Branch audit

GitHub still had 11 branches on September 29. Seven feature branches are ancestors of `main`: `audit/conservative-cleanup-2026-09-12`, `content-updates`, `editorial/reading-layout-2026-09-28`, `editorial/reference-guides-2026-09-27`, `editorial/welcome-2026-09-26`, `restructure`, and `theme-setup`.

`archive/pugsley-geometry-review-2026-09-25` has a different commit history but its complete file tree matches incorporated commit `e94facc`. It is also redundant once this equivalence is rechecked before deletion.

Keep `editorial/site-identity-2026-09-28` until its current work is merged. Keep `main` and the generated `gh-pages` branch. A verified recovery bundle of all refs was saved in the project workspace on September 28. No branches were deleted; the GitHub rule named `block deletion,,,` blocked the attempt.

## Already incorporated from the editorial hit list

Home/About/404 introductions; archive wayfinding and original-design explanation; catalog page links and geometry reading context; reading-layout and mobile-navigation improvements. Identity changes, the deferred story and final source-introduction work prevent calling the full hit list complete.
