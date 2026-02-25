import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import { csrContent, csrExtra } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function CSRPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        pretitle="CSR"
        title="Corporate Social Responsibility"
        description="Business growth must align with social accountability and positive impact."
      />

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Our Responsibility" />
          <p>{t(csrContent.text)}</p>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <img className="full-img" src={csrContent.image} alt="Community development" loading="lazy" />
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Focus Areas" />
        <div className="card-grid">
          {csrContent.pillars.map((pillar, index) => (
            <AnimatedCard key={pillar.title} title={pillar.title} text={pillar.desc} delay={index * 100} />
          ))}
        </div>
      </section>

      <section className="container section-space split-layout">
        <div className="reveal">
          <SectionTitle title="Current Initiatives" />
          <ul className="checklist">
            {csrExtra.initiatives.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <img className="full-img" src="/assets/IMG-20250617-WA00131.jpg" alt="CSR activities" loading="lazy" />
        </div>
      </section>

      <section className="container section-space">
        <SectionTitle title="Impact Orientation" />
        <div className="stats-row">
          {csrExtra.stats.map((stat, index) => (
            <div className="stat-item reveal" key={stat.label} style={{ animationDelay: `${index * 110}ms` }}>
              <strong>{t(stat.value)}</strong>
              <span>{t(stat.label)}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
