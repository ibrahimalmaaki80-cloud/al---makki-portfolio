import { useLanguage } from '../context/LanguageContext.jsx';
import { services } from '../data/content.js';
import './services.css';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section services">
      <div className="container">
        <p className="eyebrow">{t(services.eyebrow)}</p>
        <h2>{t(services.title)}</h2>

        <ul className="services__list">
          {services.items.map((item) => (
            <li key={item.en}>
              <span>{t(item)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
