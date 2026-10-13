# SM Automotive Website

Professional B2B catalogue and lead-generation website for **SM**, an established automotive control-cable manufacturing brand based in Delhi, India.

## Primary Markets
- **India** (Domestic wholesale and aftermarket distribution)
- **UAE**, including **Dubai** (Regional distribution and Middle East trade channels)
- **African Markets** (Replacement parts distribution for high-demand transport fleets)

---

## Prototype Status & Overview

The complete browser-viewable prototype is built with clean HTML5, responsive CSS3, and vanilla JavaScript—zero frameworks, zero build system, and 100% compatible with the target **WordPress + Hello Elementor** environment.

### Prototype Deliverables
- **[Home (`index.html`)](file:///e:/Websites/SM-Automotive-Website/index.html):** Compact header with typographic SM wordmark, hero section with 2W/3W and export stats, 6-card category overview, manufacturing overview, 2W/3W application segments, target international markets (India, UAE/Dubai, Africa), B2B advantages, and quote CTA.
- **[Products (`products.html`)](file:///e:/Websites/SM-Automotive-Website/products.html):** 7 core cable categories (Speedometer, Clutch, Accelerator/Throttle, Brake, Gear Shift, Choke, Seat-Lock), B2B ordering and model cross-referencing information, and direct inquiry links.
- **[About & Manufacturing (`about.html`)](file:///e:/Websites/SM-Automotive-Website/about.html):** Factual company overview, 4-stage assembly process, quality inspection checks, and export packaging specifications.
- **[Technical Insights (`blog.html`)](file:///e:/Websites/SM-Automotive-Website/blog.html):** Practical technical resources index with featured handling guide and planned editorial topics for spare parts distributors.
- **[Technical Article Layout (`blog-template.html`)](file:///e:/Websites/SM-Automotive-Website/blog-template.html):** Reusable single-post visual layout blueprint for future WordPress blog posts.
- **[Contact & Request a Quote (`contact.html`)](file:///e:/Websites/SM-Automotive-Website/contact.html):** Accessible B2B enquiry form with client-side validation, market/volume selectors, prefill support, and interactive prototype success state demonstration.
- **Styles & Scripts:**
  - `assets/css/style.css`: Unified industrial B2B stylesheet (graphite, warm white, restrained safety orange accent).
  - `assets/js/main.js`: Accessible mobile navigation toggle, active page detector, form validation, and prototype submission feedback.
  - `assets/images/`: 11 cohesive industrial visuals (hero, 7 product categories, manufacturing, quality testing, and export logistics).
- **Implementation & Launch Documentation:**
  - `docs/elementor-build-map.md`: Complete container and widget mapping for Elementor Free.
  - `docs/wordpress-launch-checklist.md`: Operational guide for SMTP delivery, spam protection, SEO, GA4/Google Ads tracking, and performance.

---

## How to Preview Locally

You can preview the prototype directly in any modern web browser using any of the following methods:

### Option A: Using Python's Built-in HTTP Server (Recommended)
Open a terminal in the project directory and run:
```bash
python -m http.server 8000
```
Then open your browser at:
```
http://localhost:8000/
```

### Option B: Using Node / npx `serve` or `http-server`
```bash
npx serve .
```

### Option C: Direct File Opening
Because all paths are relative, you can also double-click `index.html` or open it directly in Google Chrome, Microsoft Edge, or Safari:
```
file:///e:/Websites/SM-Automotive-Website/index.html
```

---

## WordPress & Elementor Migration Path

The production website will run on:
- **WordPress** + **Hello Elementor Theme** + **Elementor Free** (Flexbox/Grid Containers)
- **Elementor Header & Footer Builder** (free add-on for site-wide header and footer)
- **WPForms** or **Fluent Forms** for B2B enquiry handling with SMTP routing

Refer to `docs/elementor-build-map.md` for exact widget, container, and global styling tokens.

---

## Facts Pending SM Management Confirmation

To preserve strict factual integrity, no unverified statistics, years of experience, certifications, or factory metrics have been fabricated in public text. Missing facts are tracked in project documentation for confirmation before final WordPress content entry:
1. Exact year of establishment and operating history in Delhi.
2. Registered physical factory address and industrial area in Delhi.
3. Formal quality certifications (e.g. ISO 9001, IATF 16949 certificate numbers, if held).
4. Verified monthly control-cable manufacturing volume capacity.
5. Official customer list / OEM tier supplier relationships (if any).
6. Final verification of the 7 product categories against active production tooling.
7. Specific destination ports in Africa (e.g. Mombasa, Dar es Salaam, Lagos, Tema).
8. Official contact telephone numbers and WhatsApp Business lines.
