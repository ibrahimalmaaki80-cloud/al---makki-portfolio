import { useLanguage } from '../context/LanguageContext.jsx';
import { about, siteInfo } from '../data/content.js';
import { useReveal } from '../hooks/useReveal.js';
import './about.css';

export default function About() {
  const { t } = useLanguage();
  const revealRef = useReveal();

  const fields = [
    { label: { ar: 'الاسم', en: 'Name' }, value: t(siteInfo.name) },
    { label: { ar: 'المهنة', en: 'Profession' }, value: t(siteInfo.profession) },
    { label: { ar: 'الموقع', en: 'Location' }, value: t(siteInfo.location) },
    { label: { ar: 'الخبرة', en: 'Experience' }, value: t(siteInfo.experienceYears) },
  ];

  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__image" ref={revealRef}>
          <img src={about.aboutImage} alt={t(siteInfo.name)} loading="lazy" />
        </div>

        <div className="about__content">
          <p className="eyebrow">{t(about.title)}</p>
          <p className="about__bio">{t(about.bio)}</p>

          <dl className="about__fields">
            {fields.map((f) => (
              <div key={f.label.en}>
                <dt>{t(f.label)}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about__philosophy">
            <h3>{t(about.philosophyTitle)}</h3>
            <p>{t(about.philosophy)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
