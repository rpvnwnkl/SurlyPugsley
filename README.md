# Pugsley Wiki

An independent owner's reference and archive for the Surly Pugsley, with personal stories supporting the reference material.

**Read the website:** [www.surlypugsley.org](https://www.surlypugsley.org/).

The site explains the original design, compares published geometry, and preserves selected catalogs, product pages, interviews and component instructions. Coverage is incomplete; capture dates are not necessarily model years.

## Working on the site

This is a static site built with MkDocs and a custom theme.

- `docs/`: published pages and archived source material.
- `theme/`: page templates and navigation.
- `docs/assets/`: shared styles and scripts.
- `mkdocs.yml`: site navigation and configuration.
- `editorial/`: preservation policy, working notes and the [remaining-work list](editorial/remaining-work.md). These files are not published as website pages.

To preview locally, use Python 3 and run these commands from the repository folder:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install mkdocs mkdocs-material
python -m mkdocs serve
```

The dependency installation matches the current publishing workflow. `mkdocs-material` also supplies the Markdown extensions configured by the site; the visual theme itself is local.

Before submitting changes, run `python -m mkdocs build` and check the affected pages at desktop and phone widths. Do not commit the virtual environment or generated `site/` folder.

## Publishing and branches

Prepare changes on a working branch and review them before merging into `main`. The existing GitHub Actions workflow builds pushes to `main` and the older `content-updates` branch, and can also be run manually. It writes the generated website to `gh-pages` for GitHub Pages at the custom domain.

Keep `main` as the source of published work and `gh-pages` as generated output. Completed working branches can be removed after their work is verified in `main`; repository rules currently prevent branch deletion. The older `content-updates` publishing trigger is queued for retirement.

## Editorial and archival changes

Keep personal experience distinct from manufacturer specifications. Explain which frame or component a source covers, retain attribution, and record uncertainty rather than guessing.

Follow the [source-preservation policy](editorial/archive-policy.md): preserve original files, instructional images, captions, tables and provenance. Make presentation changes in separately labeled reading copies. Describe missing assets explicitly. Archived third-party content retains its original attribution; do not assume the repository's license changes its ownership.
