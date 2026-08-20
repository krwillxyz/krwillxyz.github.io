---
layout: default
title: Page Push · Your browser. Your endpoint.
description: "Configure once. Push the current page directly to your HTTPS endpoint."
body_class: product-site page-push-site
product_styles: true
favicon: /assets/products/page-push/icon-0.1.2.png
social_image: /assets/products/page-push/social-card-0.1.7.png
analytics: false
---

<div class="product-shell">
  <article class="page-push-panel">
    <section class="page-push-hero">
      <div class="page-push-copy">
        <img class="page-push-mark" src="/assets/products/page-push/icon-0.1.2.png" alt="Page Push">
        <p class="product-kicker platform-kicker"><img src="/assets/platform/chrome-logo-m100.svg" alt="">Chrome extension</p>
        <h1>Your browser. Your endpoint.</h1>
        <p class="page-push-slogan">Configure once. Push anywhere.</p>
        <p class="page-push-lede">Push the page you’re viewing directly to your own software. One deliberate click, one compact JSON event, no Page Push cloud in the middle.</p>
        <div class="trust-facts" aria-label="Page Push trust facts"><span>Manual only</span><span>No cloud</span><span>No account</span><span>No analytics</span></div>
        <a class="release-status page-push-status" href="https://chromewebstore.google.com/detail/knilajejnnkcfapaibggchnakannjeda?utm_source=item-share-cb" target="_blank" rel="noreferrer"><img src="/assets/platform/chrome-logo-m100.svg" alt="">Get Page Push · Chrome Web Store</a>
      </div>
      <figure class="page-push-demo" aria-label="Page Push direct delivery flow">
        <figcaption>One deliberate click. One direct POST.</figcaption>
        <div class="push-flow-stage">
          <div class="push-browser-window">
            <div class="push-browser-bar">
              <span class="push-browser-controls" aria-hidden="true"><i></i><i></i><i></i></span>
              <span class="push-address">example.com/article</span>
              <span class="push-toolbar-action"><img src="/assets/products/page-push/icon-0.1.2.png" alt=""><b>Push</b></span>
            </div>
            <div class="push-page-preview" aria-hidden="true">
              <i class="push-page-heading"></i><i></i><i></i><i class="push-selection"></i><i></i>
            </div>
          </div>
          <div class="push-transport"><span>HTTPS POST</span><i aria-hidden="true">↓</i><small>application/json</small></div>
          <div class="push-delivery-row">
            <div class="push-json-card"><span>JSON event</span><code>{<br>&nbsp;&nbsp;"url": "…",<br>&nbsp;&nbsp;"title": "…",<br>&nbsp;&nbsp;"text": "…"<br>}</code></div>
            <i class="push-delivery-arrow" aria-hidden="true">→</i>
            <div class="push-endpoint-card"><span>Your endpoint</span><b>api.example.net/intake</b><small><i></i> 2xx received</small></div>
          </div>
        </div>
        <p class="flow-proof"><strong>Your browser talks directly to your endpoint.</strong><br>No Page Push server in between.</p>
      </figure>
    </section>

    <section class="product-section" aria-labelledby="one-job-title">
      <p class="product-kicker">One job, done clearly</p>
      <h2 id="one-job-title">A direct bridge from your browser to your software.</h2>
      <div class="capability-grid">
        <div><b>01</b><p>Push the current page only when you click.</p></div>
        <div><b>02</b><p>Include selected text when you’ve highlighted it.</p></div>
        <div><b>03</b><p>Push only to an HTTPS endpoint you approve.</p></div>
        <div><b>04</b><p>See an honest success or failure result.</p></div>
      </div>
    </section>

    <section class="product-section purpose-section" aria-labelledby="purpose-title">
      <p class="product-kicker">Built for software you control</p>
      <h2 id="purpose-title">Less copying. More useful context.</h2>
      <div class="purpose-grid">
        <div><b>What moves</b><p>Page URL, title, hostname, timestamp, favicon, referring URL when available, and optional selected text.</p></div>
        <div><b>Why use it</b><p>Feed a personal API, webhook, archive, notes system, or automation without copying page details by hand.</p></div>
        <div><b>Who it fits</b><p>Developers, self-hosters, researchers, and privacy-minded people who want their browser to work with their own tools.</p></div>
        <div><b>Where it goes</b><p>Directly from your browser to the HTTPS endpoint you approve. No Page Push account, hosted middleman, tracking, or analytics.</p></div>
      </div>
    </section>

    <footer class="product-footer"><strong class="product-footer-context">Page Push extension</strong><nav class="product-footer-links" aria-label="Page Push extension links"><a href="https://chromewebstore.google.com/detail/knilajejnnkcfapaibggchnakannjeda?utm_source=item-share-cb" target="_blank" rel="noreferrer">Chrome Web Store</a><a href="/products/page-push/privacy/">Extension privacy</a><a href="/products/page-push/support/">Support</a><a href="/products/page-push/changelog/">Changelog</a></nav></footer>
  </article>
</div>
