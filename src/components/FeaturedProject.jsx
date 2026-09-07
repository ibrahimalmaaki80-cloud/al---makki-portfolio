import { useLanguage } from '../context/LanguageContext.jsx';
import { brands, featuredProject } from '../data/content.js';
import './featured-project.css';

export default function FeaturedProject() {
  const { t } = useLanguage();
  if (!featuredProject) return null;

  const brand = brands.find((b) => b.id === featuredProject.brandId);
  if (!brand) return null;

  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="featured">
      <div className="featured__media">
        <img src={featuredProject.media.src} alt={featuredProject.media.alt || brand.name} loading="lazy" />
      </div>
      <div className="container featured__overlay">
        <p className="eyebrow eyebrow--light">{t(featuredProject.label)}</p>
        <h2>{brand.name}</h2>
        <p className="featured__description">{t(featuredProject.description)}</p>
        <button className="btn btn--ghost btn--light" onClick={scrollToWork}>
          {t({ ar: 'عرض المشروع', en: 'View Project' })}
        </button>
      </div>
    </section>
  );
}
