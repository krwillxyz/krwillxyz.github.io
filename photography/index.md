---
layout: default
title: Photography
description: "Selected frames from the alley. Drop images in assets/photography to publish them here."
body_class: photography
---

<section class="photo-hero" aria-labelledby="photo-title">
  <p class="photo-eyebrow">New frames land first</p>
  <h1 id="photo-title">Photography notebook</h1>
  <p class="photo-intro">This gallery pulls straight from <code>assets/photography</code>. Add new shots and they appear here automatically once deployed.</p>
</section>

{% assign all_files = site.static_files | sort: 'path' %}
{% capture gallery_markup %}
  {% for image in all_files reversed %}
    {% assign path = image.path %}
    {% if path contains '/assets/photography/' %}
      {% assign ext = image.extname | downcase %}
      {% if ext == '.jpg' or ext == '.jpeg' or ext == '.png' or ext == '.webp' %}
        {% if site.data.photography %}
          {% assign override = site.data.photography | where: 'file', image.name | first %}
        {% else %}
          {% assign override = nil %}
        {% endif %}
        {% assign fallback = image.basename | replace: '-', ' ' | replace: '_', ' ' | replace: '  ', ' ' | strip | capitalize %}
        {% if override and override.alt %}
          {% assign alt_text = override.alt %}
        {% else %}
          {% assign alt_text = fallback %}
        {% endif %}
        <figure class="photo-frame">
          <img src="{{ image.path | relative_url }}" alt="{{ alt_text }}" loading="lazy">
          <figcaption>{{ alt_text }}</figcaption>
        </figure>
      {% endif %}
    {% endif %}
  {% endfor %}
{% endcapture %}

{% assign gallery_render = gallery_markup | strip %}
{% if gallery_render != '' %}
<section class="photo-grid" aria-label="Photo gallery">
{{ gallery_markup }}
</section>
{% else %}
<p class="photo-empty">No photos yet. See <code>assets/photography/README.md</code> for prep tips.</p>
{% endif %}

<style>
  .photo-hero {
    display: grid;
    gap: 0.6rem;
    max-width: 560px;
  }

  .photo-eyebrow {
    margin: 0;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.78rem;
    color: rgba(17, 17, 17, 0.52);
  }

  .photo-hero h1 {
    margin: 0;
    font-size: clamp(24px, 4.5vw, 40px);
    line-height: 1.12;
  }

  .photo-intro {
    margin: 0;
    font-size: clamp(15px, 2.4vw, 18px);
    color: rgba(17, 17, 17, 0.68);
  }

  .photo-empty {
    font-size: 1rem;
    color: rgba(17, 17, 17, 0.6);
  }

  .photo-grid {
    display: grid;
    gap: clamp(18px, 4vw, 28px);
    margin-top: clamp(24px, 6vw, 40px);
  }

  .photo-frame {
    margin: 0;
    display: grid;
    gap: 0.5rem;
  }

  .photo-frame img {
    width: 100%;
    border-radius: 14px;
    box-shadow: 0 10px 28px rgba(17, 17, 17, 0.12);
    background: #f4f4f4;
  }

  .photo-frame figcaption {
    font-size: 0.95rem;
    color: rgba(17, 17, 17, 0.6);
    letter-spacing: 0.01em;
  }

  @media (min-width: 840px) {
    .photo-grid {
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .photo-frame img {
      transition: none !important;
    }
  }
</style>
