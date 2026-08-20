---
layout: default
title: Pageprint Support
description: "Capture, cancellation, page compatibility, and troubleshooting for Pageprint."
body_class: product-site pageprint-site product-document
product_styles: true
favicon: /assets/products/pageprint/icon-0.1.14.png
analytics: false
---

<div class="product-shell">
  <article class="product-document-card">
    <p class="product-kicker">Pageprint · Support</p>
    <h1>Capture the page in front of you.</h1>
    <p class="document-intro">Pageprint is a validated release candidate and is not yet generally available. These instructions describe the current Chrome extension behavior.</p>

    <section class="document-section"><h2>Capture a page</h2><ol><li>Open an ordinary HTTP or HTTPS webpage.</li><li>Click the Pageprint toolbar icon, or press <code>Alt+Shift+S</code>.</li><li>Keep the target tab visible while Pageprint walks down the document.</li><li>When capture completes, the PNG appears in Chrome's Downloads.</li></ol></section>
    <section class="document-section"><h2>Cancel a capture</h2><p>Press Escape or click the Pageprint toolbar icon a second time. Pageprint restores the page and does not count cancelled, failed, interrupted, or refused captures toward the free allowance.</p></section>
    <section class="document-section"><h2>Unlock or restore</h2><p>The first 25 successful captures are free. Unlimited capture is a $4.99 one-time purchase with no subscription. Pageprint opens Lemon Squeezy's hosted checkout, then accepts the license key from the receipt. The verified entitlement remains cached locally for ordinary offline capture.</p><p>Use <strong>Check license</strong> to refresh its status while connected. <strong>Deactivate this browser</strong> releases that installation without resetting the successful-capture count.</p></section>
    <section class="document-section"><h2>Common problems</h2><h3>The toolbar action is unavailable</h3><p>Chrome does not allow ordinary extensions to capture browser settings, extension pages, the Chrome Web Store, or some other protected surfaces. Pageprint stays disabled there rather than creating a failed screenshot.</p><h3>The capture stopped when I changed tabs</h3><p>Pageprint must keep the target tab visible because Chrome captures the visible tab. Switching tabs causes an honest cancellation instead of mixing another page into the image.</p><h3>The result says “best attempt”</h3><p>The page stopped allowing contiguous downward progress or reached a bounded safety limit. Pageprint saved the useful portion it could capture, labeled it honestly, and did not consume a free capture.</p><h3>A page is incomplete or visually unusual</h3><p>Infinite feeds, virtualized lists, nested primary scrollers, rapidly mutating pages, video, WebGL, and complex parallax are outside the Version 0.1 compatibility target. Ordinary vertical articles, documentation, product pages, and references are the intended path.</p></section>
    <section class="document-section"><h2>What to include with a report</h2><p>Email the Chrome version, Pageprint version, page hostname, visible error message, and whether a PNG downloaded. Do not send a private screenshot unless it is necessary and you are comfortable sharing it.</p></section>
    <section class="document-section"><h2>Contact</h2><p>For Pageprint support, email <a href="mailto:support@krwill.xyz">support@krwill.xyz</a>.</p></section>
    <footer class="document-links"><a href="/products/pageprint/">Pageprint</a><a href="/products/pageprint/privacy/">Extension privacy</a><a href="/products/pageprint/changelog/">Changelog</a></footer>
  </article>
</div>
