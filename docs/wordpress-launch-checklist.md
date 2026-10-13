# SM Automotive Website: WordPress Production Launch Checklist

This checklist defines the operational requirements for moving the SM Automotive website from the approved prototype into a secure, fast, and conversion-ready production WordPress environment.

---

## 1. B2B Form Delivery & Email Infrastructure

Static prototypes validate front-end input only. Production lead generation requires verified transactional email infrastructure:

- [ ] **Prototype Form vs. Production Implementation:**
  - The static HTML prototype (`contact.html`) provides accessible client-side HTML5/JS validation, error messaging, and simulates local enquiry capture for interface demonstration without sending actual emails.
  - In WordPress, recreate the quotation form using **WPForms**, **Fluent Forms**, or native **Elementor Form** widgets matching the form layout (Contact Person, Company Name, Business Email, Phone/WhatsApp, Target Market, City/Destination, Business Type, Cable Category Interest, Order Requirement, Message/References, and Commercial Consent Checkbox).
  - Connect form submission actions directly to authenticated SMTP mail delivery, database logging, spam filtering, and lead tracking.
- [ ] **SMTP Plugin Installation:** Install and configure **WP Mail SMTP** or **FluentSMTP**. Never rely on default server `PHP mail()`, which often triggers spam filters.
- [ ] **Dedicated SMTP Mail Service:** Configure an authenticated transactional service (e.g., SendGrid, Brevo, Amazon SES, or Google Workspace SMTP relay).
- [ ] **DNS Records Verification:**
  - [ ] **SPF Record:** Ensure the sending IP/domain is authorized in the domain TXT SPF record (`v=spf1 include:... ~all`).
  - [ ] **DKIM Key:** Publish 2048-bit DKIM public key in DNS to guarantee cryptographic integrity.
  - [ ] **DMARC Policy:** Set up initial monitoring policy (`v=DMARC1; p=none; rua=mailto:...`).
- [ ] **Notification Routing:**
  - [ ] Primary B2B Sales desk recipient email configured.
  - [ ] Backup enquiry mailbox or CRM webhook connected.
  - [ ] Automated confirmation email configured for the prospect ("Thank you for contacting SM Automotive; our commercial desk is reviewing your requirements").
- [ ] **Form Submission Test:** Send live test enquiries across domestic and international test email providers (Gmail, Outlook, custom corporate domain) to verify instant inbox delivery.

---

## 2. Spam Prevention & Security

- [ ] **Spam Protection:** Install **Cloudflare Turnstile** or **Google reCAPTCHA v3** (invisible, zero user friction).
- [ ] **Honeypot Field:** Enable WPForms / Form honeypot anti-spam trap for automated bots.
- [ ] **WordPress Security Hardening:**
  - [ ] Enforce strong passwords and Two-Factor Authentication (2FA) for administrator accounts.
  - [ ] Change default `/wp-login.php` URL or limit login attempts.
  - [ ] Enforce SSL/HTTPS sitewide with automatic HTTP-to-HTTPS 301 redirection.
  - [ ] Disable XML-RPC if unused (`xmlrpc.php`).

---

## 3. SEO Configuration & Technical Metadata

- [ ] **SEO Plugin:** Install **Rank Math SEO** or **Yoast SEO**.
- [ ] **Permalinks:** Set WordPress Permalinks structure to `Post name` (`/%postname%/`).
- [ ] **Page Titles & Meta Descriptions:**
  - Home: `SM Automotive Control Cables | Delhi Manufacturer & Global Exporter`
  - Products: `Automotive Control Cables Catalogue | SM Automotive Delhi`
  - About: `About & Manufacturing | SM Automotive Control Cables (Delhi)`
  - Contact: `Request a B2B Quote & Contact | SM Automotive Control Cables`
- [ ] **XML Sitemap:** Verify that XML sitemap (`/sitemap_index.xml`) generates cleanly and excludes utility pages.
- [ ] **Google Search Console & Bing Webmaster:** Submit verified domain property and sitemap.
- [ ] **Schema Structured Data:**
  - [ ] `Organization` schema with legal name, Delhi headquarters, logo URL, and contact points.
  - [ ] `Product` / `ItemList` schema for the 7 cable categories.
- [ ] **Robots.txt:** Confirm `robots.txt` permits crawling of `/assets/`, `/wp-content/uploads/`, and disallows `/wp-admin/`.

---

## 4. Analytics & Google Ads Lead Conversion Tracking

Because Google Ads lead generation is an explicit business objective:

- [ ] **Google Tag Manager (GTM):** Embed GTM container snippet in `<head>` and `<body>`.
- [ ] **Google Analytics 4 (GA4):**
  - Connect GA4 measurement ID via GTM.
  - Set up standard B2B conversion event: `generate_lead`.
- [ ] **Google Ads Conversion Action:**
  - Create Conversion Action in Google Ads: "B2B Quote Form Submission".
  - Trigger conversion tag on form success event (`wpforms_success` or URL redirection to `/quote-received/`).
  - Configure Enhanced Conversions (hashed email/phone) for accurate attribution across international buyers.
- [ ] **Phone & WhatsApp Click Tracking:** Create custom click triggers in GTM for tel and WhatsApp links (`tel:*`, `api.whatsapp.com/*`).

---

## 5. Performance Optimization & Core Web Vitals (CWV)

Target: Mobile PageSpeed Score > 85, Desktop > 95, LCP < 2.0s, CLS < 0.05.

- [ ] **Caching Plugin:** Install **LiteSpeed Cache** (on LiteSpeed hosting) or **WP Rocket** / **Cache Enabler**.
- [ ] **Image Optimization:** Convert all JPG/PNG uploads to modern WebP / AVIF using *Converter for Media* or *ShortPixel*.
- [ ] **LCP Candidate Priority:** Ensure the hero visual on the homepage has `fetchpriority="high"` and is excluded from lazy loading.
- [ ] **Asset Minification:** Enable CSS and JS minification.
- [ ] **Font Delivery:** Use system fonts or local web fonts with `font-display: swap;`. Do not load multiple Google Font weights externally.

---

## 6. Factual Verification & Content Sign-off with SM Management

Before making the WordPress site publicly accessible, obtain written sign-off from SM Automotive management on all highlighted placeholders:

- [ ] Exact legal company name and registered office address in Delhi.
- [ ] Official business telephone numbers and WhatsApp Business numbers.
- [ ] Year of establishment and operating tenure.
- [ ] Verified factory floor area and equipment count.
- [ ] Verified monthly/annual control cable production volume capacity.
- [ ] Confirmation of ISO 9001 / IATF 16949 certification status and certificate numbers.
- [ ] Final sign-off on the 7 product categories against current production tooling.
- [ ] Confirmation of designated destination African export ports and UAE trading channels.
- [ ] Supply of authentic high-resolution factory and product photography to replace illustrative artwork.

---

## 7. Responsive Cross-Browser & Device QA

- [ ] **Desktop Testing:** Chrome, Safari, Firefox, Edge at 1920px, 1440px, and 1280px widths.
- [ ] **Tablet Testing:** iPad / Android tablet (768px - 1024px) portrait and landscape modes. Verify table scrollability and navigation menu collapse.
- [ ] **Mobile Testing:** iPhone (375px - 430px) and Android devices (360px - 412px).
  - Verify zero horizontal overflow / layout shifting.
  - Verify touch targets for all buttons and dropdown menus (&ge; 48px).
  - Test keyboard focus and form entry on virtual keyboards.
- [ ] **Legal Notices:** Privacy policy placeholder updated with company privacy policy and cookie banner if targeting international export markets.
