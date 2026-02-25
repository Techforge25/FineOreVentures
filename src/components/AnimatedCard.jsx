import { useLanguage } from '../context/LanguageContext';

export default function AnimatedCard({ title, text, delay = 0 }) {
  const { t } = useLanguage();

  return (
    <article className="card reveal" style={{ animationDelay: `${delay}ms` }}>
      <h3>{t(title)}</h3>
      <p>{t(text)}</p>
    </article>
  );
}
