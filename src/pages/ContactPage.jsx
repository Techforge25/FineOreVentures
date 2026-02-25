import PageHero from '../components/PageHero';
import ContactPanel from '../components/ContactPanel';
import SectionTitle from '../components/SectionTitle';
import { contactContent, contactExtra } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page contact-premium-page">
      <PageHero
        pretitle="Connect"
        title={contactContent.title}
        description={contactContent.description}
      />
      <ContactPanel
        title="Send Us a Message"
        description="Fill this form and our team will connect with you soon."
        fields={contactContent.fields}
      />

      <section className="container section-space">
        <SectionTitle title="Contact Channels" subtitle="Reach the right team quickly for faster coordination." />
        <div className="office-grid">
          {contactExtra.offices.map((office, index) => (
            <article className="office-card reveal" key={office.title} style={{ animationDelay: `${index * 100}ms` }}>
              <h3>{t(office.title)}</h3>
              <p>{t(office.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Operations Coverage" />
          <p>{t('We coordinate responses for commercial queries, shipping support, site visits, and stakeholder communication through a centralized workflow.')}</p>
          <p>{t('For urgent operational communication, include your project context in the first message so our team can route it immediately.')}</p>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <img className="full-img" src="/assets/IMG-20250628-WA0036.jpg" alt="Operations support" loading="lazy" />
        </div>
      </section>
    </div>
  );
}
