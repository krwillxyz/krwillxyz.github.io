# `w6q9tm` keychain route

The public handle is permanently reserved as:

`https://krwill.xyz/q/w6q9tm`

This handle identifies a keychain intended for Kristopher's keys. It is not yet
physically in service, so its current mode is `inactive`.

When physically attached, its `active` surface provides a small introduction
and an email action for someone who finds the keys. No home address or phone
number is exposed.

## State changes

From the repository root:

```bash
python3 q/w6q9tm/_set_mode.py inactive --publish
python3 q/w6q9tm/_set_mode.py active --publish
```

`--publish` refuses to run when the repository has other uncommitted work.

## Provenance

On 2026-09-03 this route briefly pointed to the `krwill.xyz` root while its
physical purpose was still being clarified. That mapping was superseded before
the keychain entered service. Git commit history preserves the exact prior
implementation.

A future durable resolver must preserve this public handle and its stateful
surface. It should not collapse this particular route into an HTTP redirect
unless its purpose changes deliberately.
