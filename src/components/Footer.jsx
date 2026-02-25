import { Link } from 'react-router-dom';
import { footerContent } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>Fine Ore Ventures</h3>
          <p>{t(footerContent.about)}</p>
        </div>

        <div>
          <h4>{t('Quick Links')}</h4>
          <ul className="footer-links">
            {footerContent.quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{t(link.label)}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>{t('Contact')}</h4>
          <p className="footer-location">{t(footerContent.location)}</p>
          <p>{footerContent.email}</p>
        </div>
      </div>
      <div className="footer-copy">{t('(c)')} {year} Fine Ore Ventures. {t('All rights reserved.')}</div>
    </footer>
  );
}

