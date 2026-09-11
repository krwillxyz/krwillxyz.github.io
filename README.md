# krwill.xyz

Personal website for Kristopher Williams. Jekyll remains the authoring layer; Cloudflare receives only the generated static site and the small `/q/*` resolver Worker.

## Hosting

- Canonical public URL: `https://krwill.xyz`
- Cloudflare Pages project: `krwill-xyz`
- Staging URL: `https://krwill-xyz.pages.dev`
- Deployment contract: `cloudflare/pages.json`
- Build and deployment command: `scripts/cloudflare-site --check` or `scripts/cloudflare-site --deploy`

Google Analytics is not part of the Cloudflare build. Aggregate traffic reporting comes from requests already handled at Cloudflare's edge; the site does not add a browser analytics beacon, analytics cookie, or analytics value in local storage.

The GitHub repository remains a portable source mirror. GitHub Pages is a
retired projection. Its `krwillxyz.github.io` rendering contains a retirement
notice pointing visitors to the current Cloudflare site.

The legacy `CNAME` remains only as a temporary overlap guard while recursive
DNS caches that still hold the former GitHub addresses expire. Removing it
before those caches converge produces GitHub's generic 404 for those visitors.
Delete it after the public resolver convergence check is clean.
