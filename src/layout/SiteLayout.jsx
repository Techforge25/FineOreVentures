import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SiteLayout() {
  const location = useLocation();
  const pathname = location.pathname;

  const getThemeClass = () => {
    if (pathname === '/') return 'theme-home';
    if (pathname === '/our-platform') return 'theme-about';
    if (pathname === '/our-ventures') return 'theme-ventures';
    if (pathname.includes('/our-ventures/natural-resources')) return 'theme-mining';
    if (pathname.includes('/our-ventures/governance')) return 'theme-gold';
    if (pathname.includes('/our-ventures/investment-structuring')) return 'theme-tech';
    if (pathname.includes('/our-ventures/digital-systems')) return 'theme-ai';
    if (pathname.includes('/our-ventures/telecommunications')) return 'theme-telecom';
    if (pathname.includes('/our-ventures/ecosystem-partners')) return 'theme-marketing';
    if (pathname === '/projects') return 'theme-projects';
    if (pathname === '/contact-us') return 'theme-contact';
    return 'theme-home';
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });

    const elements = Array.from(document.querySelectorAll('.reveal'));
    elements.forEach((element) => element.classList.remove('in-view'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className={`site-shell ${getThemeClass()}`}>
      <div className="ore-dust ore-dust-a" aria-hidden="true" />
      <div className="ore-dust ore-dust-b" aria-hidden="true" />
      <Navbar />
      <div className="fov-ribbon" aria-hidden="true" />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
