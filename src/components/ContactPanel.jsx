import { useLanguage } from '../context/LanguageContext';

export default function ContactPanel({ title, description, fields }) {
  const { t } = useLanguage();

  return (
    <section className="contact-panel contact-premium-panel container section-space">
      <div className="contact-premium-intro">
        <h2>{t(title)}</h2>
        <p>{t(description)}</p>
      </div>
      <form className="contact-form contact-premium-form" onSubmit={(event) => event.preventDefault()}>
        {fields.map((field) => (
          <label key={field} className="contact-premium-field">
            <span className="contact-premium-label">{t(field)}</span>
            {field === 'Message' ? (
              <textarea rows={5} placeholder={t(field)} />
            ) : (
              <input type="text" placeholder={t(field)} />
            )}
          </label>
        ))}
        <button type="submit">{t('Send Message')}</button>
      </form>
    </section>
  );
}
