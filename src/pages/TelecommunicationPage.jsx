import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { telecomContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function TelecommunicationPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        pretitle="Telecommunication"
        title="Operational Telecommunication"
        description="Reliable communication systems powering safe, coordinated, and efficient mining operations."
      />

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Why Telecom Matters" />
          <p>{t(telecomContent.intro)}</p>
          <ul className="checklist">
            {telecomContent.useCases.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <img className="full-img" src={telecomContent.image} alt="Telecom operations support" loading="lazy" />
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Telecom Pillars" subtitle="Communication infrastructure aligned with safety and production." />
        <div className="card-grid">
          {telecomContent.pillars.map((pillar, index) => (
            <article className="card reveal" key={pillar.title} style={{ animationDelay: `${index * 80}ms` }}>
              <h3>{t(pillar.title)}</h3>
              <p>{t(pillar.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Coordination at Every Layer" />
        <div className="office-grid">
          <article className="office-card reveal">
            <h3>{t('Pit-to-Dispatch')}</h3>
            <p>{t('Faster shift communication between pit teams, supervisors, and movement controllers.')}</p>
          </article>
          <article className="office-card reveal" style={{ animationDelay: '90ms' }}>
            <h3>{t('Dispatch-to-Port')}</h3>
            <p>{t('Aligned dispatch updates for stockyard handling, cargo timing, and shipping workflows.')}</p>
          </article>
          <article className="office-card reveal" style={{ animationDelay: '180ms' }}>
            <h3>{t('Control-to-Leadership')}</h3>
            <p>{t('Operational reporting channels for quicker decisions on safety, performance, and continuity.')}</p>
          </article>
        </div>
      </section>
    </>
  );
}
