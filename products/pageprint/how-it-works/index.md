---
layout: default
title: How Pageprint sees a whole page
description: "A practical look at full-page capture, including a 49,621-pixel proof."
body_class: product-site pageprint-site
product_styles: true
favicon: /assets/products/pageprint/icon-0.1.14.png
analytics: false
---

<div class="product-shell">
  <article class="product-document-card pageprint-explainer">
    <p class="product-kicker">Pageprint · Under the hood</p>
    <h1>One page is more than one screen.</h1>
    <p class="document-intro">A full-page capture is a small act of reconstruction. Pageprint measures the document, walks it in bounded steps, joins the frames locally, and returns the browser to where it started.</p>

    <section class="document-section"><h2>What the extension is solving</h2><p>Browsers only expose the visible viewport as an image. Long pages also have fixed headers, lazy-loaded sections, changing heights, and practical image-size limits. Pageprint handles the ordinary cases deliberately and produces a labeled best attempt when a page cannot be represented honestly as one complete PNG.</p></section>

    <section class="document-section"><h2>The extreme proof</h2><p>The IANA Root Zone Database produced a real Pageprint capture measuring 1,440 × 49,621 pixels. It is useful evidence, but it is intentionally not loaded on the product page or presented as the normal experience.</p><figure class="extreme-proof"><img src="/assets/products/pageprint/examples/iana-root-zone-database-proof-preview.jpg" alt="Three representative sections from the top, middle, and bottom of the 49,621-pixel IANA capture" loading="lazy"><figcaption>Top, middle, and end of the retained 49,621-pixel capture.</figcaption></figure><p><a class="document-action" href="/assets/products/pageprint/examples/iana-root-zone-database-pageprint.png" target="_blank" rel="noreferrer">Open the original 49,621-pixel PNG <span aria-hidden="true">↗</span></a></p></section>

    <section class="document-section"><h2>The honest boundary</h2><p>Articles, documentation, product pages, forums, references, and other ordinary vertical documents are the intended surface. Infinite feeds, nested scrolling apps, video, WebGL, and rapidly changing pages may be incomplete. A failed, cancelled, or labeled best-attempt capture does not consume the free count.</p></section>

    <footer class="document-links"><a href="/products/pageprint/">Try the product-page demonstration</a><a href="https://chromewebstore.google.com/detail/pageprint/oekdjihofonmgjfkcabpcgohofnlooep" target="_blank" rel="noreferrer">Chrome Web Store</a><a href="/products/pageprint/privacy/">Privacy</a></footer>
  </article>
</div>
