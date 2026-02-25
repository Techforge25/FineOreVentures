import SectionTitle from '../components/SectionTitle';
import { useLanguage } from '../context/LanguageContext';

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="about-page platform-page venture-pro-page telecom-pro-page platform-pro-page">
      <section
        className="telecom-hero"
        style={{
          backgroundImage:
            'linear-gradient(112deg, rgba(4, 12, 20, 0.9), rgba(4, 12, 20, 0.56)), url(/assets/IMG-20250628-WA0088.jpg)',
        }}
      >
        <div className="container telecom-hero-inner reveal">
          <span className="pretitle">{t('Platform')}</span>
          <h1>{t('Our Platform')}</h1>
          <p>
            {t(
              'A sovereign-aligned infrastructure platform built for institutional confidence, operational resilience, and long-term commercial performance.'
            )}
          </p>
        </div>
      </section>

      <section className="container section-space platform-who-we-are">
        <div className="reveal platform-shell telecom-future-shell">
          <SectionTitle title="Who We Are" />
          <p>
            {t(
              'Fine Ore Ventures is a sovereign-aligned infrastructure platform. We stabilize strategic assets, modernize critical systems, and deliver execution frameworks that align public-interest priorities with institutional-grade performance.'
            )}
          </p>
        </div>
      </section>

      <section className="container section-space platform-engage">
        <SectionTitle title="How We Engage" subtitle="Operator + Investor + Strategic Partner." />
        <div className="card-grid">
          {[
            {
              title: 'Operator',
              text: 'We execute operational stabilization, service quality recovery, and performance governance across critical infrastructure assets.',
            },
            {
              title: 'Investor',
              text: 'We deploy capital through disciplined, risk-screened structures tied to measurable outcomes and institutional readiness.',
            },
            {
              title: 'Strategic Partner',
              text: 'We co-deliver modernization programs with ministries, regulators, and enterprise stakeholders through transparent execution frameworks.',
            },
          ].map((item, index) => (
            <article className="card reveal platform-engage-card telecom-phase-item" key={item.title} style={{ animationDelay: `${index * 90}ms` }}>
              <h3>{t(item.title)}</h3>
              <p>{t(item.text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container section-space split-layout platform-discipline">
        <div className="reveal platform-shell telecom-future-shell">
          <SectionTitle title="Institutional Discipline" />
          <p>
            {t(
              'Execution is anchored by governance cadence, compliance architecture, and auditable performance control across every engagement model.'
            )}
          </p>
          <ul className="checklist">
            <li>{t('Risk management frameworks with clear ownership and escalation controls')}</li>
            <li>{t('Compliance-led execution aligned with regulatory and institutional mandates')}</li>
            <li>{t('Governance cadence with periodic review, KPI reporting, and corrective action loops')}</li>
            <li>{t('Audit-ready documentation standards across operational and commercial decisions')}</li>
          </ul>
        </div>
        {/* <div className="reveal platform-shell telecom-future-shell" style={{ animationDelay: '120ms' }}>
          <SectionTitle title="Leadership & Advisory" subtitle="Profiles will be published in the next update." />
          <div className="timeline-mini">
            {[
              'Executive Leadership - Infrastructure Operations',
              'Strategic Advisory - Telecom & Digital Systems',
              'Institutional Advisory - Governance & Compliance',
            ].map((item) => (
              <article className="timeline-mini-item platform-lead-card" key={item}>
                <h4>{t(item)}</h4>
                <p>{t('Bio placeholder')}</p>
              </article>
            ))}
          </div>
        </div> */}
      </section>
    </div>
  );
}
