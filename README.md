# Crossborder Adventures website

Mobile first Next.js website for `crossborderadventures.co.in`, designed for deployment on Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Deploy

Import the GitHub repository into Vercel. The framework is detected as Next.js; the default build command (`npm run build`) and output settings work without extra configuration. Attach `crossborderadventures.co.in` in the Vercel project domain settings and update the domain's DNS records at GoDaddy using the values Vercel provides.

## Before launch

- Replace the illustrative journey cards and stock photography with confirmed tour data and Crossborder's own photos. The detailed tour catalogue was not included in the discovery questionnaire.
- Confirm permission and exact substantiation for the podium, OEM partnership, and company history figures currently shown in the proof strip.
- Add real testimonials when available, plus legal policies and the official company/GST information.
- Add a content management system for staff to update tour pages, dates, pricing, availability, and images. This first pass is a static marketing site; it does not yet include a CMS or booking/payment backend. A headless CMS can be connected while keeping Vercel's free hosting plan.
- Confirm the brand logo, fonts, WhatsApp Business setup, and which tour prices should be public.

## Lead flow

The adventure matchmaker collects four preferences in the browser and opens a prefilled WhatsApp message to the supplied number `+91 9356378178`. No answers are stored by this site. The OEM CTA opens WhatsApp with a separate enquiry prompt.
