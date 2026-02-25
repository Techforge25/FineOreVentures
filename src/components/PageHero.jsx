import { useLanguage } from '../context/LanguageContext';

export default function PageHero({ pretitle, title, description }) {
  const { t } = useLanguage();

  return (
    <section className="page-hero">
      <div className="container">
        {pretitle && <span className="pretitle">{t(pretitle)}</span>}
        <h1>{t(title)}</h1>
        {description && <p>{t(description)}</p>}
      </div>
    </section>
  );
}
