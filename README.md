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

## Edit site content with Sanity

The Sanity Studio is in `studio/`. Start it locally with:

```bash
cd studio
npm install
npm run dev
```

Open the local Studio URL shown in the terminal and sign in with the Sanity
account that has access to project `jnwipq1i`. The Studio can also be deployed
to Sanity's hosted Studio after signing in with the Sanity CLI:

```bash
npm run deploy
```

For the first setup only, import the site's existing products, services and
photos into the empty Sanity dataset:

```bash
npm run seed
```

Run the seed from the `studio/` directory. It creates only missing documents
and uploads the referenced images; it does not overwrite existing Sanity
content. Sign in with `npx sanity login` first if the CLI requests
authentication. Never put a Sanity API token in the repository.

The homepage, product catalogue, services, and project photos are managed in
Sanity. The dataset is public so the static website can read its published
marketing content; do not store private information there.

This site is a static export. A Sanity webhook is configured to trigger a
production deployment of the Vercel `main` branch when published homepage,
product, service, or field/project-photo content changes. The CMS code must be
merged to `main` before those deployments can include Sanity content.

To build locally:

```bash
npm run build
```

The generated site is in `out/`.

### Vercel publishing hook

The Sanity webhook targets the Vercel deploy hook for the `main` branch, filters
for `homePage`, `product`, `service`, and `sitePhoto` documents, and triggers on
create, update, and delete events. If the Vercel hook is rotated, update its URL
in the Sanity project under **API → Webhooks**. Treat the deploy-hook URL like a
password; it is stored in Sanity and must not be committed or shared.

## Update code-based details

- Edit the WhatsApp number, phone display number and locations in `src/data/site.ts`. Product and service content is managed in Sanity after the dataset has been seeded.
- Replace or add site photos in `public/images/` and field videos in `public/videos/`, then update `fieldPhotos` or `fieldVideos` in `src/data/site.ts`.
- Confirm the exact location addresses, products, availability and contact details with the business owner before launch.

The contact form prepares a WhatsApp message in the visitor's browser; it does not store or submit form data to a server.
