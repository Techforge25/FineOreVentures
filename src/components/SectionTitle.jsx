import { useLanguage } from '../context/LanguageContext';

export default function SectionTitle({ title, subtitle }) {
  const { t } = useLanguage();

  return (
    <div className="section-title">
      <h2>{t(title)}</h2>
      {subtitle && <p>{t(subtitle)}</p>}
    </div>
  );
}
