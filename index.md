---
layout: default
title: Kristopher Williams
description: "Kristopher Williams. Tinkerer. Thinker. Creator. Mukilteo, Washington."
og_description: "Kristopher Williams. Tinkerer. Thinker. Creator. Mukilteo, Washington."
body_class: home
bio_image: /assets/images/world-cup-bio.jpg
---

<section class="identity-card" aria-labelledby="page-title">
  <figure class="identity-photo">
    <img src="{{ page.bio_image | relative_url }}" alt="Kristopher Williams" draggable="false" oncontextmenu="return false;">
    <span class="image-shield" aria-hidden="true"></span>
    <figcaption>World Cup vs. Australia, June 19, 2026</figcaption>
  </figure>

  <div class="identity-copy">
    <p class="year-mark">{{ site.time | date: "%Y" }}</p>
    <h1 id="page-title">Kristopher Williams</h1>
    <p class="role-line">
      Tinkerer,
      <a class="role-link tooltip-link" href="/resume/" aria-label="Thinker. Resume.">Thinker<span class="tooltip" role="tooltip">Resume</span></a>,
      <a class="role-link tooltip-link" href="https://www.instagram.com/krwillxyz/" target="_blank" rel="noopener noreferrer" aria-label="Creator. Visit Instagram.">Creator<span class="tooltip" role="tooltip">Instagram</span></a>,
      <a class="role-link tooltip-link" href="https://driftingforms.com" target="_blank" rel="noopener noreferrer" aria-label="Artist. Check out my artistic side.">Artist<span class="tooltip" role="tooltip">Check out my artistic side</span></a>,
      <span class="role-link dad-joke" tabindex="0">Dad<span class="tooltip" role="tooltip">When does a joke become a dad joke? When it becomes apparent.</span></span>
    </p>

    <div class="identity-facts" aria-label="Identity details">
      <p class="location-field">
        <span class="location-trigger" tabindex="0">Mukilteo, WA, USA</span>
        <span class="map-popover" role="tooltip" aria-label="Map showing Mukilteo north of Seattle on Puget Sound">
          <iframe
            title="Map showing Mukilteo, Washington, north of Seattle"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-122.521%2C47.548%2C-122.189%2C48.010&amp;layer=mapnik&amp;marker=47.9445%2C-122.3046"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
          <span class="map-caption">On Puget Sound, just north of Seattle.</span>
        </span>
      </p>
      <p class="email-line"><a href="mailto:kristopher.williams@fastmail.com">kristopher.williams<wbr>@fastmail.com</a></p>
    </div>
  </div>
</section>
