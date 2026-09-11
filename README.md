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
retired projection: it no longer claims the `krwill.xyz` custom domain and its
`krwillxyz.github.io` rendering points visitors to the current Cloudflare site.
