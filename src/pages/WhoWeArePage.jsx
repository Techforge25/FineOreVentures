import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { aboutContent, whoWeAreExtra } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function WhoWeArePage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        pretitle="About"
        title="Who We Are"
        description="Built on accountability, reliability, and long-term impact in mining."
      />

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Company Overview" />
          <p>{t(aboutContent.intro)}</p>
          <p>{t(aboutContent.mission)}</p>
          <p>{t(aboutContent.vision)}</p>
        </div>

        <div className="value-panel reveal" style={{ animationDelay: '120ms' }}>
          <h3>Core Values</h3>
          <ul>
            {aboutContent.values.map((value) => (
              <li key={value}>{t(value)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Strategic Context" />
        <div className="card-grid">
          {aboutContent.details.map((item, index) => (
            <AnimatedCard key={item.heading} title={item.heading} text={item.text} delay={index * 100} />
          ))}
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Operational Snapshot" />
        <div className="stats-row">
          {whoWeAreExtra.metrics.map((metric, index) => (
            <div className="stat-item reveal" key={metric.label} style={{ animationDelay: `${index * 100}ms` }}>
              <strong>{metric.value}</strong>
              <span>{t(metric.label)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Transformation Journey" />
          <div className="timeline-mini">
            {whoWeAreExtra.timeline.map((item) => (
              <article key={item.year} className="timeline-mini-item">
                <h4>{item.year}</h4>
                <p>{t(item.text)}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <img className="full-img" src="/assets/IMG-20250628-WA0088.jpg" alt="KBM workforce" loading="lazy" />
        </div>
      </section>
    </>
  );
}
