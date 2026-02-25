import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import { projectsContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        pretitle="Projects"
        title="Strategic Projects Portfolio"
        description={projectsContent.intro}
      />

      <div className="venture-pro-page projects-premium-page">
        <section className="container section-space projects-premium-section">
          <SectionTitle title="Current Projects" subtitle="Execution-led initiatives across operations and growth verticals." />
          <div className="media-block-grid">
            {projectsContent.projects.map((project, index) => (
              <article className="media-block reveal" key={project.title} style={{ animationDelay: `${index * 90}ms` }}>
                <img src={project.image} alt={project.title} loading="lazy" />
                <div>
                  <h3>{t(project.title)}</h3>
                  <p>{t(project.text)}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container section-space split-layout projects-premium-section">
          <div className="reveal">
            <SectionTitle title="Capital Discipline" />
            <p>{t('Capital is deployed in milestone-gated phases aligned with operational readiness, governance benchmarks, and measurable performance outcomes.')}</p>
            <ul className="checklist">
              <li>{t('Milestone-based allocation and release controls')}</li>
              <li>{t('Risk-gated execution sequencing')}</li>
              <li>{t('Independent performance checkpoints')}</li>
              <li>{t('Structured reporting to institutional stakeholders')}</li>
            </ul>
          </div>
          <div className="reveal" style={{ animationDelay: '120ms' }}>
            <SectionTitle title="Public Interest Metrics" />
            <ul className="checklist">
              <li>{t('Job creation and workforce stability')}</li>
              <li>{t('Infrastructure uptime and service continuity')}</li>
              <li>{t('Export logistics throughput and reliability')}</li>
              <li>{t('Digital governance and reporting maturity')}</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
