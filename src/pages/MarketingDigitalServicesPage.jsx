import SectionTitle from '../components/SectionTitle';
import { marketingDigitalServicesContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function MarketingDigitalServicesPage() {
  const { t } = useLanguage();

  return (
    <div className="venture-pro-page telecom-pro-page ecosystem-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage: `linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(${marketingDigitalServicesContent.image})`,
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Our Ventures')}</span>
          <h1>{t(marketingDigitalServicesContent.heroTitle)}</h1>
          <p>{t(marketingDigitalServicesContent.intro)}</p>
          {marketingDigitalServicesContent.positioning.map((line) => (
            <p key={line}>{t(line)}</p>
          ))}
        </div>
      </section>

      <section className="container section-space reveal">
        <div className="telecom-phase-stack">
          <article className="telecom-phase-item telecom-phase-item-with-media">
            <div className="telecom-phase-main">
              <div className="telecom-phase-head">
                <h3>{t('Ecosystem Categories')}</h3>
              </div>
              <ul className="checklist telecom-checklist">
                {marketingDigitalServicesContent.categories.map((item) => (
                  <li key={item}>{t(item)}</li>
                ))}
              </ul>
            </div>
            {marketingDigitalServicesContent.categoriesImage && (
              <figure className="telecom-phase-media">
                <img src={marketingDigitalServicesContent.categoriesImage} alt={t('Ecosystem Categories')} loading="lazy" />
              </figure>
            )}
          </article>
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <div className="telecom-future-shell">
            <SectionTitle title={marketingDigitalServicesContent.governanceLayer.title} subtitle={marketingDigitalServicesContent.governanceLayer.intro} />
            <ul className="checklist telecom-checklist">
              {marketingDigitalServicesContent.governanceLayer.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <div className="telecom-future-shell">
            <SectionTitle title={marketingDigitalServicesContent.executionPrinciples.title} />
            <ul className="checklist telecom-checklist">
              {marketingDigitalServicesContent.executionPrinciples.points.map((item) => (
                <li key={item}>{t(item)}</li>
              ))}
            </ul>
            <p>{t(marketingDigitalServicesContent.executionPrinciples.close)}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

