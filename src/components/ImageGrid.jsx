export default function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <figure key={image} className="image-tile reveal" style={{ animationDelay: `${index * 60}ms` }}>
          <img src={image} alt={`Gallery ${index + 1}`} loading="lazy" />
        </figure>
      ))}
    </div>
  );
}
