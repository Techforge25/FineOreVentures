import SectionTitle from '../components/SectionTitle';
import { technologyInvestmentsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function TechnologyInvestmentsPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page investment-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(${technologyInvestmentsContent.image})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(technologyInvestmentsContent.heroTitle)}</h1>
          <p>{t(technologyInvestmentsContent.intro)}</p>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-phase-stack">
          <article className="telecom-phase-item telecom-phase-item-with-media">
            <div className="telecom-phase-main">
              <div className="telecom-phase-head">
                <h3>{t(technologyInvestmentsContent.commercial.title)}</h3>
              </div>
              <ul className="checklist telecom-checklist">
                {technologyInvestmentsContent.commercial.points.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>
            {technologyInvestmentsContent.commercial.image && (
              <figure className="telecom-phase-media">
                <img src={technologyInvestmentsContent.commercial.image} alt={t(technologyInvestmentsContent.commercial.title)} loading="lazy" />
              </figure>
            )}
          </article>
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-future-shell">
          <SectionTitle title={technologyInvestmentsContent.riskArchitecture.title} subtitle={technologyInvestmentsContent.riskArchitecture.intro} />
          <ul className="checklist telecom-checklist">
            {technologyInvestmentsContent.riskArchitecture.points.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
          <p>{t(technologyInvestmentsContent.riskArchitecture.close)}</p>
        </div>
      </section>
    </div>
  );
}

