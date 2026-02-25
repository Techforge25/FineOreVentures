import PageHero from '../components/PageHero';
import SectionTitle from '../components/SectionTitle';
import ImageGrid from '../components/ImageGrid';
import { galleryContent, galleryMediaBlocks } from '../data/siteContent';
import { useLanguage } from '../context/LanguageContext';

export default function GalleryMediaPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        pretitle="Media"
        title="Gallery & Media"
        description="Visual timeline of operations and ground activities."
      />
      <section className="container section-space">
        <SectionTitle title="Photo Gallery" subtitle="Real images from current operation records." />
        <ImageGrid images={galleryContent.images} />
      </section>

      <section className="container section-space">
        <SectionTitle title="Media Highlights" subtitle="Key moments from operations, teams, and logistics." />
        <div className="media-block-grid">
          {galleryMediaBlocks.map((block, index) => (
            <article className="media-block reveal" key={block.title} style={{ animationDelay: `${index * 90}ms` }}>
              <img src={block.image} alt={block.title} loading="lazy" />
              <div>
                <h3>{t(block.title)}</h3>
                <p>{t(block.text)}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
