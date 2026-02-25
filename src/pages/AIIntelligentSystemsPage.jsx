import SectionTitle from '../components/SectionTitle';
import { aiIntelligentSystemsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function AIIntelligentSystemsPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page digital-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.58)), url(${aiIntelligentSystemsContent.image})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(aiIntelligentSystemsContent.heroTitle)}</h1>
          <p>{t(aiIntelligentSystemsContent.intro)}</p>
          <p>{t(aiIntelligentSystemsContent.lead)}</p>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-phase-stack">
          <article className="telecom-phase-item telecom-phase-item-with-media">
            <div className="telecom-phase-main">
              <div className="telecom-phase-head">
                <h3>{t(aiIntelligentSystemsContent.analytics.title)}</h3>
              </div>
              <ul className="checklist telecom-checklist">
                {aiIntelligentSystemsContent.analytics.points.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>
            {aiIntelligentSystemsContent.analytics.image && (
              <figure className="telecom-phase-media">
                <img src={aiIntelligentSystemsContent.analytics.image} alt={t(aiIntelligentSystemsContent.analytics.title)} loading="lazy" />
              </figure>
            )}
          </article>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-phase-item telecom-phase-item-with-media">
          <div className="telecom-phase-main">
            <SectionTitle title={aiIntelligentSystemsContent.aiCommandCenter.title} subtitle={aiIntelligentSystemsContent.aiCommandCenter.intro} />
            <ul className="checklist telecom-checklist">
              {aiIntelligentSystemsContent.aiCommandCenter.capabilities.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
          <figure className="telecom-phase-media">
            <img src={aiIntelligentSystemsContent.aiCommandCenter.image} alt={t(aiIntelligentSystemsContent.aiCommandCenter.title)} loading="lazy" />
          </figure>
        </div>
      </section>

      <section className="container section-space reveal">
        <SectionTitle title={aiIntelligentSystemsContent.aiUseCases.title} subtitle={aiIntelligentSystemsContent.aiUseCases.intro} />
        <div className="card-grid ai-usecase-grid">
          {aiIntelligentSystemsContent.aiUseCases.items.map((item, index) => (
            <article className="card telecom-phase-item ai-usecase-card" key={item.title} style={{ animationDelay: `${index * 90}ms` }}>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
              <span className="ai-usecase-metric">{t(item.metric)}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title={aiIntelligentSystemsContent.payments.title} subtitle={aiIntelligentSystemsContent.payments.intro} />
            <ul className="checklist telecom-checklist">
              {aiIntelligentSystemsContent.payments.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <div className="telecom-future-shell">
            <SectionTitle title={aiIntelligentSystemsContent.cybersecurity.title} subtitle={aiIntelligentSystemsContent.cybersecurity.intro} />
            <ul className="checklist telecom-checklist">
              {aiIntelligentSystemsContent.cybersecurity.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title={aiIntelligentSystemsContent.governance.title} subtitle={aiIntelligentSystemsContent.governance.intro} />
            <ul className="checklist telecom-checklist">
              {aiIntelligentSystemsContent.governance.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
            <p>{t(aiIntelligentSystemsContent.governance.close)}</p>
          </div>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-closing">
          <SectionTitle title={aiIntelligentSystemsContent.roadmap.title} subtitle={aiIntelligentSystemsContent.roadmap.intro} />
          <ul className="checklist telecom-checklist">
            {aiIntelligentSystemsContent.roadmap.phases.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section-space reveal ai-kpi-section">
        <div className="ventures-kpi-row ai-kpi-row">
          {aiIntelligentSystemsContent.outcomes.map((item) => (
            <article key={item.label} className="ventures-kpi-item ai-kpi-item">
              <strong>{t(item.value)}</strong>
              <span>{t(item.label)}</span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

