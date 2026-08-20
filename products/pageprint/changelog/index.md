---
layout: default
title: Pageprint Changelog
description: "Release-candidate history for the Pageprint Chrome extension."
body_class: product-site pageprint-site product-document
product_styles: true
favicon: /assets/products/pageprint/icon-0.1.14.png
---

<div class="product-shell">
  <article class="product-document-card">
    <p class="product-kicker">Pageprint · Changelog</p>
    <h1>Release history.</h1>
    <p class="document-intro">Pageprint is currently a validated release candidate. Checkout and external license behavior are proven; final macOS confirmation and Chrome Web Store publication remain before general availability.</p>
    <section class="document-section version-row"><div class="version-number">0.1.16<br>August 20, 2026</div><div><h2>Commerce, end to end</h2><ul><li>The release package now contains the audited public Lemon Squeezy checkout, product, and variant identifiers without seller credentials.</li><li>A real Test-mode order proved license issuance, activation, restart-safe local entitlement, validation, deactivation, and signed webhook delivery.</li><li>The $4.99 one-time unlock is non-expiring, permits five installations, and has no subscription.</li><li>The capture engine remains byte-identical to the holdout-passing 0.1.13 candidate.</li></ul></div></section>
    <section class="document-section version-row"><div class="version-number">0.1.15<br>August 15, 2026</div><div><h2>Submission hardening</h2><ul><li>License requests now follow Lemon Squeezy’s documented JSON-response contract while retaining form-encoded license operations.</li><li>Release evidence explicitly proves failed, cancelled, and best-attempt captures preserve the free count.</li><li>Chrome reviewer access, final privacy comparison, and submission checks are defined without placing reviewer credentials in public artifacts.</li><li>The capture engine remains byte-identical to the holdout-passing 0.1.13 candidate.</li></ul></div></section>
    <section class="document-section version-row"><div class="version-number">0.1.14<br>August 14, 2026</div><div><h2>The commercial boundary</h2><ul><li>The first 25 successful captures are free; capture 26 opens the unlimited-unlock path.</li><li>A provider-neutral entitlement layer and Lemon Squeezy license adapter preserve local capture after purchase.</li><li>Checkout, activation, restore, validation, deactivation, and offline cached access are implemented and tested against a provider mock.</li><li>Public product identifiers and a live transaction proof still block paid publication.</li></ul></div></section>
    <section class="document-section version-row"><div class="version-number">0.1.13<br>August 14, 2026</div><div><h2>Oversized pages without oversized memory</h2><ul><li>A bounded streaming PNG path captures very tall ordinary pages without building one enormous in-memory canvas.</li><li>The frozen candidate passed a fresh 20-page ordinary-web holdout at 90% A+B and 80% A.</li><li>The capture engine is frozen for the Version 0.1 product boundary.</li></ul></div></section>
    <section class="document-section version-row"><div class="version-number">0.1.12<br>August 13, 2026</div><div><h2>A tested ordinary-web engine</h2><ul><li>Observed viewport positions and document extent replaced brittle fixed-height capture plans.</li><li>Interaction isolation, honest cancellation, sticky suppression, dynamic-page handling, and state restoration were hardened.</li><li>The development corpus reached 36 of 36 useful ordinary-page results.</li><li>The first frozen holdout exposed a single-image size ceiling and remained preserved as a failed 80% result.</li></ul></div></section>
    <section class="document-section version-row"><div class="version-number">0.1.0<br>August 12, 2026</div><div><h2>One click. The whole page.</h2><ul><li>Initial Manifest V3 proof captured an ordinary scrolling webpage as one local PNG.</li><li>No screenshot upload, capture cloud, account, analytics, telemetry, editor, annotation, or sharing.</li><li>Failed and cancelled attempts did not consume quota.</li></ul></div></section>
    <footer class="document-links"><a href="/products/pageprint/">Pageprint</a><a href="/products/pageprint/privacy/">Extension privacy</a><a href="/products/pageprint/support/">Support</a></footer>
  </article>
</div>
