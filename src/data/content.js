/**
 * ============================================================
 *  AL-MAKKI PHOTOGRAPHY — CONTENT FILE
 * ============================================================
 * This is the ONLY file you should need to edit to update the
 * website's text, links, brands, photos and videos.
 *
 * Everything is written in pairs: { ar: "...", en: "..." }
 * so the site can switch between Arabic and English.
 *
 * MEDIA (photos & videos):
 * - Local images: put files in /public/media/ and reference
 *   them as "/media/your-file.jpg"
 * - Remote images: paste any direct image URL
 * - Videos: paste an MP4 URL, a YouTube URL, or a Vimeo URL.
 *   The player figures out the type automatically.
 * - "poster" is the still image shown before a video plays.
 * ============================================================
 */

export const siteInfo = {
  name: { ar: 'إبراهيم المكي', en: 'Ibrahim Al-Makki' },
  shortName: { ar: 'المكي', en: 'AL-MAKKI' },
  profession: { ar: 'مصور فوتوغرافي و مصور فيديو', en: 'Photographer & Videographer' },
  location: { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' }, // [LOCATION]
  experienceYears: { ar: '+٩ سنوات خبرة', en: '9+ Years Experience' }, // [XX YEARS]
  email: 'ibrahimalmaaki80@gmail.com', // [EMAIL] — replace with real email
  whatsapp: '+201144497062', // [WHATSAPP] — replace with real number, digits only after +
  instagram: 'https://www.instagram.com/ibrahimalmakky', // [INSTAGRAM URL]
  behance: 'https://www.behance.net/Ibtahimalmba60', // [BEHANCE URL]
  portraitImage: '/media/DSC_8269.png', // [REPLACE WITH IBRAHIM'S PHOTO]
};

export const nav = {
  home: { ar: 'الرئيسية', en: 'Home' },
  about: { ar: 'عن إبراهيم', en: 'About' },
  work: { ar: 'الأعمال', en: 'Work' },
  services: { ar: 'الخدمات', en: 'Services' },
  contact: { ar: 'تواصل', en: 'Contact' },
};

export const hero = {
  eyebrow: { ar: 'قصص بصرية للأزياء والعلامات التجارية', en: 'Visual stories for fashion & brands' },
  intro: {
    ar: 'مصور فوتوغرافي متخصص في صناعة القصص البصرية للأزياء والعلامات التجارية والأشخاص.',
    en: 'Photographer specializing in creating visual stories for fashion, brands and people.',
  },
  ctaPrimary: { ar: 'استعرض الأعمال', en: 'View Selected Work' },
  ctaSecondary: { ar: 'تواصل مع إبراهيم', en: 'Contact Ibrahim' },
};

export const about = {
  title: { ar: 'نبذة', en: 'About' },
  bio: {
    ar: '[أضف نبذة إبراهيم هنا — تجربته، أسلوبه، وأبرز محطاته المهنية.]',
    en: '[ADD BIO HERE — Ibrahim\u2019s background, style, and career highlights.]',
  },
  philosophyTitle: { ar: 'الفلسفة الإبداعية', en: 'Creative Philosophy' },
  philosophy: {
    ar: '[أضف الفلسفة الإبداعية هنا — كيف يرى إبراهيم الضوء، والقصة، والصورة.]',
    en: '[ADD PHILOSOPHY HERE — how Ibrahim approaches light, story, and image.]',
  },
  aboutImage: '/media/about-placeholder.svg', // [ADD BIO PHOTO]
};

export const workSection = {
  eyebrow: { ar: 'الأعمال المختارة', en: 'Selected Work' },
  title: { ar: 'علامات تجارية عمل معها', en: 'Brands & Clients' },
  subtitle: {
    ar: 'مجموعة مختارة من الحملات والمشاريع التحريرية.',
    en: 'A curated selection of campaigns and editorial projects.',
  },
};

/**
 * ------------------------------------------------------------
 * BRANDS — add as many as you like. Copy one object below and
 * change its contents to add a new brand project.
 * ------------------------------------------------------------
 */
export const brands = [
  {
    id: 'brand-01',
    name: 'Brand One', // [ADD BRAND LOGO / NAME]
    logo: '/media/logo-brand-01.svg', // [ADD BRAND LOGO]
    tagline: { ar: 'حملة أزياء / تصوير تحريري', en: 'Fashion campaign / Editorial photography' },
    year: '2026',
    location: { ar: 'القاهرة، مصر', en: 'Cairo, Egypt' },
    role: { ar: 'مصور', en: 'Photographer' },
    description: {
      ar: '[أضف وصف المشروع هنا]',
      en: '[ADD PROJECT DESCRIPTION]',
    },
    media: [
      { type: 'image', src: '/media/brand-01-01.svg', alt: 'Brand One — campaign image 1' }, // [ADD PROJECT IMAGES]
      { type: 'image', src: '/media/brand-01-02.svg', alt: 'Brand One — campaign image 2' },
      { type: 'video', src: 'https://www.youtube.com/watch?v=REPLACE_ME', poster: '/media/brand-01-poster.svg' }, // [ADD VIDEO URL] (MP4, YouTube, or Vimeo link also accepted)
      { type: 'image', src: '/media/brand-01-03.svg', alt: 'Brand One — campaign image 3' },
    ],
  },
  {
    id: 'brand-02',
    name: 'Brand Two',
    logo: '/media/logo-brand-02.svg',
    tagline: { ar: 'تصوير حملة إعلانية', en: 'Commercial campaign' },
    year: '2025',
    location: { ar: 'دبي، الإمارات', en: 'Dubai, UAE' },
    role: { ar: 'مصور ومخرج فني', en: 'Photographer & Art Director' },
    description: {
      ar: '[أضف وصف المشروع هنا]',
      en: '[ADD PROJECT DESCRIPTION]',
    },
    media: [
      { type: 'image', src: '/media/brand-02-01.svg', alt: 'Brand Two — campaign image 1' },
      { type: 'video', src: 'https://www.youtube.com/watch?v=REPLACE_ME', poster: '/media/brand-02-poster.svg' },
      { type: 'image', src: '/media/brand-02-02.svg', alt: 'Brand Two — campaign image 2' },
    ],
  },
  {
    id: 'brand-03',
    name: 'Brand Three',
    logo: '/media/logo-brand-03.svg',
    tagline: { ar: 'تحرير أزياء', en: 'Fashion editorial' },
    year: '2025',
    location: { ar: 'الرياض، السعودية', en: 'Riyadh, Saudi Arabia' },
    role: { ar: 'مصور', en: 'Photographer' },
    description: {
      ar: '[أضف وصف المشروع هنا]',
      en: '[ADD PROJECT DESCRIPTION]',
    },
    media: [
      { type: 'image', src: '/media/brand-03-01.svg', alt: 'Brand Three — campaign image 1' },
      { type: 'image', src: '/media/brand-03-02.svg', alt: 'Brand Three — campaign image 2' },
      { type: 'image', src: '/media/brand-03-03.svg', alt: 'Brand Three — campaign image 3' },
    ],
  },
];

/**
 * Featured project — highlight one major campaign as a
 * magazine-style cover story. Set to null to hide the section.
 */
export const featuredProject = {
  brandId: 'brand-01',
  label: { ar: 'قصة الغلاف', en: 'Cover Story' },
  media: { type: 'image', src: '/media/featured-cover.svg', alt: 'Featured campaign' }, // [ADD FEATURED IMAGE/VIDEO]
  description: {
    ar: '[أضف وصفًا موجزًا للمشروع المميز هنا]',
    en: '[ADD A SHORT DESCRIPTION OF THE FEATURED PROJECT]',
  },
};

export const services = {
  eyebrow: { ar: 'الخدمات', en: 'Services' },
  title: { ar: 'مجالات العمل', en: 'What I Do' },
  items: [
    { ar: 'تصوير أزياء', en: 'Fashion Photography' },
    { ar: 'تصوير تجاري', en: 'Commercial Photography' },
    { ar: 'تصوير تحريري', en: 'Editorial Photography' },
    { ar: 'تصوير حملات', en: 'Campaign Photography' },
    { ar: 'تصوير بورتريه', en: 'Portrait Photography' },
    { ar: 'محتوى بصري للعلامات التجارية', en: 'Brand Visual Content' },
  ],
};

export const contact = {
  eyebrow: { ar: 'تواصل', en: 'Get in Touch' },
  headline: {
    ar: 'لنصنع شيئًا يستحق أن يُتذكر.',
    en: "Let's create something worth remembering.",
  },
  whatsappLabel: { ar: 'واتساب', en: 'WhatsApp' },
  emailLabel: { ar: 'البريد الإلكتروني', en: 'Email' },
  instagramLabel: { ar: 'إنستغرام', en: 'Instagram' },
  behanceLabel: { ar: 'بيهانس', en: 'Behance' },
};

export const footer = {
  rights: { ar: 'جميع الحقوق محفوظة', en: 'All rights reserved' },
};
