import SectionTitle from '../components/SectionTitle';
import { mineralsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function MineralsPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page mining-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(${mineralsContent.image})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(mineralsContent.heroTitle)}</h1>
          <p>{t(mineralsContent.heroTagline)}</p>
          <p>{t(mineralsContent.intro)}</p>
        </div>
      </section>

      <section className="container section-space split-layout mining-focus-layout">
        <div className="reveal">
          <div className="telecom-future-shell mining-focus-panel">
            <SectionTitle title={mineralsContent.focusAreas.title} />
            <ul className="checklist telecom-checklist">
              {mineralsContent.focusAreas.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        {mineralsContent.focusAreas.image && (
          <div className="reveal mining-focus-media-wrap" style={{ animationDelay: '120ms' }}>
            <figure className="telecom-phase-media mining-focus-media">
              <img src={mineralsContent.focusAreas.image} alt={t(mineralsContent.focusAreas.title)} loading="lazy" />
            </figure>
          </div>
        )}
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title={mineralsContent.logistics.title} />
            <p>{t(mineralsContent.logistics.text)}</p>
            <ul className="checklist telecom-checklist">
              {mineralsContent.logistics.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <div className="telecom-future-shell">
            <SectionTitle title={mineralsContent.esg.title} subtitle={mineralsContent.esg.intro} />
            <ul className="checklist telecom-checklist">
              {mineralsContent.esg.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-closing mining-digitization-card">
          <SectionTitle title={mineralsContent.digitization.title} />
          <p>{t(mineralsContent.digitization.text)}</p>
        </div>
      </section>
    </div>
  );
}

