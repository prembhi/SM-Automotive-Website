# SM Automotive Website: Elementor Implementation Build Map

This document provides a concrete, section-by-section implementation blueprint for translating the static prototype into **WordPress** using **Hello Elementor**, **Elementor Free**, and lightweight, compatible add-ons (such as *Elementor Header & Footer Builder* and *WPForms*).

---

## 1. Global Setup & Design Tokens

### Global Theme & Plugins
- **Base Theme:** Hello Elementor (lightweight, zero bloat).
- **Core Builder:** Elementor (Free edition using Flexbox/Grid Containers).
- **Header & Footer:** *Elementor Header & Footer Builder* (Brainstorm Force) or *Royal Elementor Addons*.
- **Forms:** *WPForms (Free)* or native Elementor Form if upgraded.

### Global Site Settings (Elementor > Site Settings)

#### Global Colors
| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Primary (Dark)** | `#14171c` | Headings, dark section backgrounds, wordmark |
| **Secondary (Slate)** | `#475569` | Body text, subheadings, borders |
| **Accent (Safety Orange)**| `#e65100` | Primary buttons, active highlights |
| **Accent Hover** | `#c44300` | Button hover states |
| **Accent Subtle** | `#fff7ed` | Icon background wraps |
| **Page Background** | `#f8fafc` | Clean neutral canvas |
| **Card Surface** | `#ffffff` | Elevated component backgrounds |
| **Dark Section Surface**| `#0d0f12` | High-impact contrast export sections |

#### Global Fonts (Typography)
- **Primary / Secondary / Text / Accent:** System Default Stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif`).
- **Heading 1:** 48px desktop / 34px tablet / 28px mobile, Weight 800, Line Height 1.15.
- **Heading 2:** 34px desktop / 28px tablet / 24px mobile, Weight 700, Line Height 1.25.
- **Heading 3:** 22px desktop / 20px tablet / 18px mobile, Weight 700.
- **Body Text:** 16px desktop / 15px mobile, Weight 400, Line Height 1.6.
- **Button / Meta:** 14px, Weight 600, Letter Spacing 0.04em.

#### Global Buttons
- **Padding:** `12px 24px`
- **Border Radius:** `4px`
- **Typography:** 14px Semi-Bold
- **Transition:** `0.2s ease`

---

## 2. Global Header & Footer (Elementor Header & Footer Builder)

### Header Structure
1. **Top Announcement Bar Container:**
   - *Type:* Full-width Container. Background: `#0d0f12`. Padding: `8px 24px`.
   - *Left Column / Widget:* Icon List or Text widget (Delhi, India | UAE/Dubai & African Markets).
   - *Right Column / Widget:* Text widget with link to `/contact/` ("Request a Quote").
   - *Responsive:* Hide left text on mobile (`< 768px`) to prevent wrapping.
2. **Main Header Container:**
   - *Type:* Boxed Container (max-width `1240px`), Direction: Row, Space Between, Align Center. Sticky on Top.
   - *Brand Wordmark:* HTML or Icon Box widget recreating the `SM` badge (`44x44px`, background `#14171c`, border `#e65100`, text "SM") + Heading "SM AUTOMOTIVE" & subtitle "Control Cables & Assemblies".
   - *Navigation Menu Widget:* Native Navigation widget (`Home`, `Products`, `About & Manufacturing`, `Technical Insights`, `Contact & Quote`). Horizontal on desktop, mobile slide drawer on smaller screens.
   - *CTA Button Widget:* Button "Request a Quote", Link to `/contact/`, Style: Accent Orange.

### Footer Structure
- **Container 1 (Main Footer Grid):**
  - *Background:* `#0d0f12`. 4-Column Flex/Grid Container.
  - *Col 1 (1.5fr):* Brand wordmark, company introduction.
  - *Col 2 (1fr):* Quick Links (Navigation widget or Icon list).
  - *Col 3 (1fr):* Cable Range Category Links.
  - *Col 4 (1.2fr):* B2B Sales Desk, Delhi location, Direct Quote button.
- **Container 2 (Bottom Copyright Bar):**
  - *Border-top:* `1px solid rgba(255,255,255,0.08)`. Direction: Row, Space Between. Copyright text + legal links.

---

## 3. Home Page (`index.html`) Section-by-Section Mapping

| Section # | Section Name | Elementor Container Structure | Recommended Widgets | Custom CSS / Configuration |
| :--- | :--- | :--- | :--- | :--- |
| **1** | **Hero Section** | 2-Column Flexbox Container (Row). Background: `#0d0f12`. Padding: `64px 0 80px`. | **Left:** Heading (H1 with styled span), Text Editor, 2-Button Container (Primary + Outline White), 3-Item Stats Container (2W & 3W Applications, India & Exports, B2B Supply).<br>**Right:** Image widget (`hero-cables.jpg`), caption text. | Object-fit cover, border `1px solid rgba(255,255,255,0.15)`, shadow. |
| **2** | **Category Overview** | Boxed Container + 3-Column Grid Container. Padding: `64px 0`. | **Per Card Container:** Image widget (aspect ratio 4:3), Heading (H3), Text Editor, 2 Buttons (Quote + Details). | Border `1px solid #e2e8f0`, hover transform `translateY(-4px)` with shadow. |
| **3** | **Manufacturing Intro** | Boxed Container + 3-Column Grid Container. Background: `#f1f5f9`. | **Per Card:** Container with SVG icon wrap, Heading (H3), Text Editor (Inner Wire Assembly, Protective Conduit, End Fittings). | Clean white background per card, border radius 6px. |
| **4** | **2W & 3W Applications**| Boxed Container + 2-Column Grid Container. | **Per Card:** Container, Heading (H3), Badge, Text Editor, Nested Container with pill tags for cable types. | Neutral tag styling (`background: #f1f5f9; padding: 4px 8px`). |
| **5** | **Export Markets** | Boxed Container (Dark `#14171c`) + 3-Column Grid Container. | **Per Card:** Container with background `#1e2229`, Heading (H3), Text Editor, Icon list with checkmark icons (India, UAE/Dubai, African Markets). | High-contrast white text, accent orange sub-heading. |
| **6** | **B2B Advantages** | Boxed Container + 4-Column Grid Container. | **Per Card:** Container, Heading (H4), Text Editor (Direct Manufacturer Access, 2W & 3W Focus, Export-Ready Packaging, Commercial Quotations). | Compact cards focusing on direct supply. |
| **7** | **Final Quote CTA** | Boxed Container. Direction: Row, Space Between, Align Center. | Heading (H2), Text Editor, Large Button widget linking to `/contact/`. | Background linear gradient `#14171c` to `#0d0f12`, border-left `4px solid #e65100`. |

---

## 4. Products Page (`products.html`) Section-by-Section Mapping

| Section | Elementor Container Structure | Recommended Widgets | Notes |
| :--- | :--- | :--- | :--- |
| **Page Header** | Full-width Dark Container (`#14171c`). | Heading (H1), Text Editor. | Clear overview of 2W, 3W, and light utility cables. |
| **Catalogue Grid**| Boxed Container + 3-Column Grid. | 7 Product Cards (Speedometer, Clutch, Accelerator, Brake, Gear, Choke, Seat-Lock). | 7th card centered in final row via `.product-card-centered`. Each card has one primary CTA "Enquire About This Cable" preselecting category in `/contact/`. |
| **B2B Ordering Section** | Boxed Container + 3-Column Grid. Background: `#f1f5f9`. | 3 Feature Cards (Product Requirements, Commercial Quotations, Order Inquiries). | Neutral B2B enquiry cards focused on submitting specifications. |
| **Quotation CTA**| Boxed Container. Banner layout. | Heading (H3), Text, Primary Button. | Direct link to `/contact/`. |

---

## 5. About & Manufacturing Page (`about.html`) Section-by-Section Mapping

| Section | Elementor Container Structure | Recommended Widgets | Notes |
| :--- | :--- | :--- | :--- |
| **Page Header** | Full-width Dark Container. | Heading (H1), Subtitle. | Highlights Delhi manufacturing base. |
| **Company Profile**| 2-Column Container (Text + Image). | **Left:** Heading, Text Editor.<br>**Right:** Image widget (`manufacturing-process.jpg`). | Factual company overview in Delhi. |
| **4 Assembly Stages** | 4-Column Container. Background: `#f1f5f9`. | 4 Step Cards with step numbers (01, 02, 03, 04), Headings, Text (Inner Wire, Conduit, Terminals, Inspection). | Clear, factual mechanical workflow. |
| **Quality Inspection** | 2-Column Container (Image + Text). | **Left:** Image widget (`quality-testing.jpg`).<br>**Right:** Heading, Text, Bulleted list of checks (dimensional, connection integrity, stroke, casing). | Demonstrates verification process. |
| **Export Packaging** | 2-Column Container (Dark `#14171c`). | **Left:** Heading, Text, Checklist of export packaging specs.<br>**Right:** Image widget (`export-logistics.jpg`). | Focuses on India, UAE, and Africa transit protection. |

---

## 6. Contact & Request a Quote Page (`contact.html`) Mapping

### Layout: 2-Column Container
- **Left Column (40% width):**
  - Company Contact Details (Delhi manufacturing base, primary markets, commercial turnaround hours).
  - Production note on form delivery.
- **Right Column (60% width):**
  - WPForms Free widget or Elementor Form widget:
    - *Full Name* (Single Line Text, required)
    - *Company Name* (Single Line Text, required)
    - *Business Email* (Email field, required)
    - *Phone / WhatsApp* (Phone field, required)
    - *Target Market* (Dropdown: India, UAE, East Africa, West Africa, Other, required)
    - *City / Destination* (Single Line Text)
    - *Business Type* (Dropdown: Wholesaler, Importer, Retailer, Fleet, Other, required)
    - *Cable Category Interest* (Dropdown: Clutch, Brake, Accelerator, Speedometer, Gear, Choke, Seat-Lock, Multiple, required)
    - *Estimated Volume* (Dropdown: Trial, Wholesale, Recurring, Container)
    - *Message / Vehicle Reference* (Paragraph Text)
    - *Consent Checkbox* (Single Checkbox, required)
    - *Submit Button* (Label: "Send B2B Quotation Request", Accent Color)

---

## 7. Technical Insights Index & Single Post Template

### A. Blog Archive / Index (`blog.html`)
- Configured via **WordPress Settings > Reading** (Posts page) or **Elementor Theme Builder > Archive**:
  - Hero Header with title and description.
  - Featured Guide Container (Image + Summary + Read Button).
  - Archive Posts Grid (displaying published technical articles).
  - Technical inquiry banner linking to `/contact/`.

### B. Single Post Template (`blog-template.html`)
- Configured via **Elementor Theme Builder > Single Post**:
  - Container (Max-Width 820px).
  - Post Title Widget (H1).
  - Post Info Widget (Author, Category, Reading Time).
  - Featured Image Widget.
  - Post Content Widget (rendering Gutenberg headings, paragraphs, lists, blockquotes).
  - Callout Banner (reusable CTA template for mid-article quotation enquiry).
  - Author Box Widget (SM Automotive Technical Desk).
  - Post Navigation Widget (Previous / Next post links).

---

## 8. Minimal Custom CSS Snippets Needed in Elementor

To keep the Elementor build clean and maintenance-free, only the following minimal CSS is placed in **Appearance > Customize > Additional CSS** (or Elementor Global Custom CSS):

```css
/* Accessible High-Contrast Focus Ring */
:focus-visible {
  outline: 3px solid #e65100 !important;
  outline-offset: 2px !important;
}

/* Fluid Heading 1 for Hero */
.sm-hero-title {
  font-size: clamp(2.2rem, 4.5vw, 3.5rem);
  line-height: 1.15;
}

/* Card Hover Elevation */
.sm-card-hover {
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}
.sm-card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.09);
  border-color: #fdba74;
}

/* Center 7th product card in final row */
@media (min-width: 1025px) {
  .product-card-centered {
    grid-column: 2;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .product-card-centered {
    grid-column: 1 / -1;
    justify-self: center;
    width: calc((100% - 1.5rem) / 2);
  }
}
```
