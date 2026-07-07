import { images } from '../data/siteData.js';
function Gallery() {
  const gallery = [images.gallery1, images.gallery2, images.gallery3, images.gallery4, images.gallery5, images.gallery6];
  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">
        <div className="section-head"><p className="eyebrow">Latest Gallery</p><h2>See what is happening inside Theworkculture</h2></div>
        <div className="gallery-grid">
          {gallery.map((img, i) => <img key={img} src={img} alt={`Clean empty office and cabin interior ${i + 1}`} />)}
        </div>
      </div>
    </section>
  );
}
export default Gallery;
