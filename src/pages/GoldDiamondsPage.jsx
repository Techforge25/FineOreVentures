import SectionTitle from '../components/SectionTitle';
import { goldDiamondsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function GoldDiamondsPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page governance-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(${goldDiamondsContent.image})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(goldDiamondsContent.heroTitle)}</h1>
          <p>{t(goldDiamondsContent.intro)}</p>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-phase-stack">
          <article className="telecom-phase-item">
            <div className="telecom-phase-head">
              <h3>{t(goldDiamondsContent.deliveryRhythm.title)}</h3>
            </div>
            <ul className="checklist telecom-checklist">
              {goldDiamondsContent.deliveryRhythm.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title={goldDiamondsContent.oversightFramework.title} />
            <ul className="checklist telecom-checklist">
              {goldDiamondsContent.oversightFramework.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <div className="telecom-future-shell">
            <SectionTitle title={goldDiamondsContent.capabilityTransfer.title} subtitle={goldDiamondsContent.capabilityTransfer.intro} />
            <ul className="checklist telecom-checklist">
              {goldDiamondsContent.capabilityTransfer.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
            <p>{t(goldDiamondsContent.capabilityTransfer.close)}</p>
          </div>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-closing">
          <SectionTitle title={goldDiamondsContent.additions.title} />
          <ul className="checklist telecom-checklist">
            {goldDiamondsContent.additions.points.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

