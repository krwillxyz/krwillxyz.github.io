---
layout: default
title: Page Push Support
description: "Setup, receiver requirements, and troubleshooting for Page Push."
body_class: product-site page-push-site product-document
product_styles: true
favicon: /assets/products/page-push/icon-128.png
---

<div class="product-shell">
  <nav class="product-nav" aria-label="Page Push navigation"><a href="/products/page-push/">Page Push</a><div class="product-nav-links"><a href="/products/page-push/privacy/">Privacy</a><a href="/products/page-push/support/" aria-current="page">Support</a><a href="/products/page-push/changelog/">Changelog</a></div></nav>
  <article class="product-document-card">
    <p class="product-kicker">Page Push · Support</p>
    <h1>Connect your browser to your endpoint.</h1>
    <p class="document-intro">Page Push sends a JSON event directly from Chrome to one HTTPS API endpoint you configure.</p>

    <section class="document-section"><h2>Quick setup</h2><ol><li>Open Page Push settings.</li><li>Enter an HTTPS endpoint.</li><li>Choose no authorization, a bearer token, or a custom header.</li><li>Save and approve access to that endpoint origin.</li><li>Visit a webpage, open Page Push, and click <strong>Push page</strong>.</li></ol></section>
    <section class="document-section"><h2>Receiver requirements</h2><p>Your receiver must accept an HTTPS <code>POST</code> with an <code>application/json</code> body. Return any <code>2xx</code> response to confirm delivery. Redirects are intentionally rejected.</p></section>
    <section class="document-section"><h2>Common problems</h2><h3>Endpoint access was not granted</h3><p>Save settings again and approve Chrome's request for access to that HTTPS origin.</p><h3>Chrome could not reach the endpoint</h3><p>Confirm the URL, network path, receiver process, and TLS certificate. Page Push requires HTTPS.</p><h3>The endpoint returned an HTTP error</h3><p>Read the status and response excerpt shown by Page Push, then inspect your receiver logs.</p><h3>Selected text is missing</h3><p>Enable selected-text capture in settings and make a selection before opening Page Push.</p></section>
    <section class="document-section"><h2>Contact</h2><p>For Page Push support, email <a href="mailto:support@krwill.xyz">support@krwill.xyz</a>. Include the Chrome version, Page Push version, and the visible error message. Do not send authorization tokens.</p></section>
  </article>
</div>
