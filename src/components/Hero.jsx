import { useLanguage } from '../context/LanguageContext.jsx';
import { hero, siteInfo } from '../data/content.js';
import './hero.css';

export default function Hero() {
  const { t } = useLanguage();

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="home" className="hero">
      <div className="container hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">{t(hero.eyebrow)}</p>
          <h1 className="hero__name">
            {t(siteInfo.name)}
            <span className="hero__profession">{t(siteInfo.profession)}</span>
          </h1>
          <p className="hero__intro">{t(hero.intro)}</p>

          <dl className="hero__meta">
            <div>
              <dt>{t(siteInfo.location)}</dt>
            </div>
            <div>
              <dt>{t(siteInfo.experienceYears)}</dt>
            </div>
          </dl>

          <div className="hero__actions">
            <button className="btn btn--primary" onClick={() => scrollTo('work')}>
              {t(hero.ctaPrimary)}
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo('contact')}>
              {t(hero.ctaSecondary)}
            </button>
          </div>
        </div>

        <div className="hero__portrait">
          <img src={siteInfo.portraitImage} alt={t(siteInfo.name)} loading="eager" />
          <span className="hero__portrait-caption">[REPLACE WITH IBRAHIM'S PHOTO]</span>
        </div>
      </div>
    </section>
  );
}
