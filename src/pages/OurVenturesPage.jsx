import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { venturesMeta, venturesOverview } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function OurVenturesPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page ventures-overview-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage:
            'linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(/assets/IMG-20250628-WA0109.jpg)',
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t('National-Scale Infrastructure Verticals')}</h1>
          <p>
            {t(
              'Explore our venture architecture across natural resources, telecom stabilization, digital systems, investment structuring, ecosystem assembly, and governance.'
            )}
          </p>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title="Venture Thesis" />
            <p>{t(venturesMeta.thesis)}</p>
          </div>
        </div>
        {/* <div className="stats-row ventures-kpi-row reveal" style={{ animationDelay: '120ms' }}>
          {venturesMeta.metrics.map((metric) => (
            <div className="stat-item ventures-kpi-item" key={metric.label}>
              <strong>{t(metric.value)}</strong>
              <span>{t(metric.label)}</span>
            </div>
          ))}
        </div> */}
      </section>

      <section className="container section-space">
        <SectionTitle title="Strategic Pillars" />
        <div className="card-grid">
          {venturesMeta.pillars.map((pillar, index) => (
            <article className="card reveal telecom-phase-item" key={pillar.title} style={{ animationDelay: `${index * 90}ms` }}>
              <h3>{t(pillar.title)}</h3>
              <p>{t(pillar.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Venture Portfolio" />
        <div className="media-block-grid">
          {venturesOverview.map((venture, index) => (
            <article className="media-block reveal telecom-phase-item" key={venture.to} style={{ animationDelay: `${index * 90}ms` }}>
              <img src={venture.image} alt={venture.title} loading="lazy" />
              <div>
                <h3>{t(venture.title)}</h3>
                <p>{t(venture.text)}</p>
                <Link to={venture.to} className="hero-cta small">
                  {t('View Venture')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
