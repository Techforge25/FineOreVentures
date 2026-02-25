import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { homeContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="home-page home-rebuild-page">
      <section className="home-hero">
        <video src={homeContent.heroMedia.video} autoPlay muted loop playsInline />
        <div className="home-hero-overlay" />

        <div className="container home-hero-content">
          <span className="pretitle">{homeContent.hero.pretitle}</span>
          <h1>{t(homeContent.hero.title)}</h1>
          <p>{t(homeContent.hero.description)}</p>
          <div className="hero-actions">
            <Link to="/contact-us" className="hero-cta">
              {t(homeContent.hero.ctaPrimary)}
            </Link>
            <Link to="/our-ventures" className="hero-cta secondary">
              {t(homeContent.hero.ctaSecondary)}
            </Link>
          </div>
        </div>
      </section>

      <section className="container section-space home-mandate-section">
        <SectionTitle title={homeContent.mandate.title} />
        <div className="mandate-summary reveal">
          <p>{t(homeContent.mandate.text)}</p>
        </div>
      </section>

      <section className="container section-space home-partners-section">
        <SectionTitle title="Our KDM Partners" subtitle="Core execution partners supporting equipment, field operations, and delivery reliability." />
        <div className="kdm-partners-grid reveal" aria-label="KBM Partners">
          {homeContent.kdmPartners.map((partner, index) => (
            <article className="kdm-partner-card" key={partner.name} style={{ animationDelay: `${index * 80}ms` }}>
              <span className="kdm-partner-index">{String(index + 1).padStart(2, '0')}</span>
              <div className="kdm-partner-logo-wrap">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className={partner.name === 'Caterpillar' ? 'kdm-logo-caterpillar' : ''}
                />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space home-partners-section">
        <SectionTitle title="Our Partners" subtitle="Strategic ecosystem collaborators across telecom, digital infrastructure, enterprise systems, and security." />
        <div className="partners-marquee reveal" aria-label="Our Partners">
          <div className="partners-track">
            {[...homeContent.partners, ...homeContent.partners].map((partner, index) => (
              <article className="partner-logo-card" key={`${partner.name}-${index}`}>
                <img src={partner.logo} alt={partner.name} loading="lazy" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-space home-pillars-section">
        <SectionTitle title="Three Pillars" subtitle="Core infrastructure lanes that anchor our operating platform." />
        <div className="pillars-preview-grid">
          {homeContent.pillars.map((pillar, index) => (
            <article className="pillar-card reveal" key={pillar.title} style={{ animationDelay: `${index * 90}ms` }}>
              <img src={pillar.image} alt={t(pillar.title)} loading="lazy" />
              <div className="pillar-card-body">
                <h3>{t(pillar.title)}</h3>
                <p>{t(pillar.text)}</p>
                <Link to={pillar.to} className="hero-cta small">
                  {t('Explore')}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space home-model-section">
        <SectionTitle title={homeContent.model.title} subtitle={homeContent.model.intro} />
        <div className="model-grid">
          {homeContent.model.blocks.map((block, index) => (
            <article className="model-card reveal" key={block.title} style={{ animationDelay: `${index * 85}ms` }}>
              <h3>{t(block.title)}</h3>
              <p>{t(block.text)}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
