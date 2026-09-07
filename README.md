# Ibrahim Al-Makki — Photographer Portfolio

A bilingual (Arabic / English) editorial photography portfolio built with
React + Vite. Light, premium, minimal — organized by brand/client case studies
rather than a generic photo gallery.

## Run it locally

You need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Open the URL it prints (usually `http://localhost:5173`).

To build the production version:

```bash
npm run build
npm run preview   # preview the production build locally
```

## The ONE file you need to edit

**`src/data/content.js`**

Everything on the site — Ibrahim's name, bio, WhatsApp number, email, social
links, the list of brands, and every image/video — lives in this single file.
Every piece of text is written as `{ ar: "...", en: "..." }` so both languages
stay in sync.

### Adding photos and videos

1. Drop your image/video files into the `public/media/` folder.
2. Reference them in `content.js` as `/media/your-file.jpg`.
3. For videos you can use:
   - a local file: `/media/your-video.mp4`
   - a YouTube link: `https://www.youtube.com/watch?v=...`
   - a Vimeo link: `https://vimeo.com/...`
   - any direct MP4 URL from a CDN

   The `poster` field is the still image shown before the video plays.

### Adding a new brand / client project

Open `src/data/content.js`, find the `brands` array, copy one existing
brand object, paste it as a new entry, and change its contents. The website
automatically creates a new numbered case-study section for it — no other
file needs to change.

### Placeholder content

Every placeholder is marked with a bracketed note, e.g. `[ADD BIO HERE]` or
`[REPLACE WITH IBRAHIM'S PHOTO]`. The current images in `public/media/` are
simple labeled placeholders so the site looks complete — swap them out with
real photography whenever you're ready.

## Project structure

```
src/
  data/content.js          ← edit this for all text, links, brands & media
  context/LanguageContext.jsx   ← handles AR/EN + RTL/LTR switching
  hooks/useReveal.js        ← small scroll-reveal animation helper
  components/
    Header.jsx / header.css       ← sticky nav + language switcher + mobile menu
    Hero.jsx / hero.css           ← opening introduction section
    About.jsx / about.css         ← profile / bio / philosophy
    FeaturedProject.jsx           ← optional "cover story" highlight
    Work.jsx                      ← renders the list of BrandProject sections
    BrandProject.jsx / .css       ← one reusable brand/client case study
    MediaCarousel.jsx / .css      ← mixed photo+video gallery (swipe, keyboard, fullscreen)
    Services.jsx / .css
    Contact.jsx / .css            ← WhatsApp + Email CTAs, Instagram, Behance
    Footer.jsx / .css
  styles/global.css         ← design tokens (colors, type, spacing) + shared styles
public/
  media/                    ← put all images/videos here
  favicon.svg
```

## Deploying (free, no backend needed)

This is a static site — no database, no authentication, no server required.

### Vercel
1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command: `npm run build`. Output
   directory: `dist`.
4. Deploy.

### Netlify
1. Push this project to GitHub (or drag-and-drop the `dist` folder after
   running `npm run build`).
2. Build command: `npm run build`. Publish directory: `dist`.

## Notes

- Default language is Arabic (RTL). The `العربية | EN` switcher in the
  header changes language, direction, and text alignment instantly.
- The media carousel plays nicely with `prefers-reduced-motion` and is fully
  keyboard- and swipe-navigable.
- All colors, fonts, and spacing live in `src/styles/global.css` as CSS
  variables if you want to adjust the palette later.
