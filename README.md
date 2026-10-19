# Oasis Irrigation Solutions

A static, enquiry-focused website built with Next.js and TypeScript. Products are shown as a catalogue; enquiries are sent to Oasis through WhatsApp.

## Run locally

```bash
npm install
npm run dev
```

## Build for static hosting

```bash
npm run typecheck
npm run build
```

The production files are generated in `out/` and can be deployed to a static host.

## Update business details

- Edit the WhatsApp number, phone display number, locations, product cards and services in `src/data/site.ts`.
- Replace or add site photos in `public/images/` and field videos in `public/videos/`, then update `fieldPhotos` or `fieldVideos` in `src/data/site.ts`.
- Confirm the exact location addresses, products, availability and contact details with the business owner before launch.

The contact form prepares a WhatsApp message in the visitor's browser; it does not store or submit form data to a server.
