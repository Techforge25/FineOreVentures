import SectionTitle from '../components/SectionTitle';
import { telecommunicationsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function TelecommunicationsPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.88), rgba(4, 12, 20, 0.52)), url(${telecommunicationsContent.heroImage})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(telecommunicationsContent.heroTitle)}</h1>
          <p>{t(telecommunicationsContent.intro)}</p>
          <p>{t(telecommunicationsContent.lead)}</p>
        </div>
      </section>

      <section className="container section-space reveal">
        <SectionTitle title={telecommunicationsContent.frameworkTitle} subtitle={telecommunicationsContent.frameworkIntro} />
        <div className="telecom-phase-stack">
          {telecommunicationsContent.phases.map((phase) => (
            <article key={phase.phase} className="telecom-phase-item telecom-phase-item-with-media">
              <div className="telecom-phase-main">
                <div className="telecom-phase-head">
                  <span>{t(phase.phase)}</span>
                  <h3>{t(phase.title)}</h3>
                </div>
                <p className="telecom-phase-objective">{t(phase.objective)}</p>
                <ul className="checklist telecom-checklist">
                  {phase.points.map((item) => (
                    <li key={item}>{t(item)}</li>
                  ))}
                </ul>
                <p className="telecom-phase-close">{t(phase.close)}</p>
              </div>
              {phase.image && (
                <figure className="telecom-phase-media">
                  <img src={phase.image} alt={t(phase.title)} loading="lazy" />
                </figure>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* <section className="container section-space reveal">
        <div className="telecom-controls-wrap">
          <SectionTitle title={telecommunicationsContent.controls.title} subtitle={telecommunicationsContent.controls.intro} />
          <div className="telecom-controls-grid">
            <div className="telecom-flow">
              {telecommunicationsContent.controls.flow.map((step, index) => (
                <div key={step} className="telecom-flow-step">
                  <span>{t(step)}</span>
                  {index < telecommunicationsContent.controls.flow.length - 1 && <i aria-hidden="true" />}
                </div>
              ))}
            </div>
            <ul className="telecom-controls-list">
              {telecommunicationsContent.controls.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      <section className="container section-space reveal">
        <div className="telecom-future-shell">
          <SectionTitle title={telecommunicationsContent.futureEnablement.title} />
          <p>{t(telecommunicationsContent.futureEnablement.text)}</p>
          <ul className="checklist telecom-checklist">
            {telecommunicationsContent.futureEnablement.gates.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title={telecommunicationsContent.capabilities.title} subtitle={telecommunicationsContent.capabilities.intro} />
          <ul className="checklist">
            {telecommunicationsContent.capabilities.points.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <SectionTitle title={telecommunicationsContent.sovereignAlignment.title} subtitle={telecommunicationsContent.sovereignAlignment.intro} />
          <ul className="checklist">
            {telecommunicationsContent.sovereignAlignment.points.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
          <p>{t(telecommunicationsContent.sovereignAlignment.close)}</p>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title={telecommunicationsContent.ecosystemAssembly.title} />
          <p>{t(telecommunicationsContent.ecosystemAssembly.intro)}</p>
          <p>{t(telecommunicationsContent.ecosystemAssembly.close)}</p>
        </div>
        <div className="reveal engagement-model-panel" style={{ animationDelay: '120ms' }}>
          <SectionTitle title={telecommunicationsContent.engagementModel.title} />
          <ul className="checklist">
            {telecommunicationsContent.engagementModel.points.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
          <p>{t(telecommunicationsContent.engagementModel.close)}</p>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-closing">
          <SectionTitle title="Closing Statement" />
          <p>{t(telecommunicationsContent.closing)}</p>
        </div>
      </section>
    </div>
  );
}

