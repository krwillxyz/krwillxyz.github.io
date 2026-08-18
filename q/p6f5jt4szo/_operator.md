# Wise Owl QR pointer

The engraved address is permanently:

`https://krwill.xyz/q/p6f5jt4szo`

The public surface reads `state.json` with a cache-busting query. Profile and
lost/found modes render at the same opaque URL. A future redirect may point the
same QR at another root-relative path or HTTPS destination.

## Normal mode

```json
"mode": "profile",
"target": null
```

## Lost-wallet mode

```json
"mode": "lost",
"target": null
```

## Future destination

Set `mode` to `redirect`, then set `target` to any root-relative path on
`krwill.xyz` or an absolute HTTPS URL. Do not point it back to
`/q/p6f5jt4szo/`, which the router rejects as a loop.

After changing the target, deploy GitHub Pages and scan the engraved URL in a
private browser window. GitHub's edge may take a few minutes to converge; the
router requests a fresh state file on every visit to minimize stale behavior.
