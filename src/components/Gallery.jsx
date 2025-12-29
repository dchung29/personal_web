import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Import portfolio images
import img1 from '../portfolio/IMG_6112.jpg';
import img2 from '../portfolio/cal 2.jpg';
import img3 from '../portfolio/_DSC1108 2.JPG';
import img4 from '../portfolio/IMG_1187.jpg';
import img5 from '../portfolio/IMG_1191.jpg';
import img6 from '../portfolio/IMG_1195.jpg';
import img7 from '../portfolio/IMG_1201.jpg';
import img8 from '../portfolio/IMG_1207.jpg';
import img9 from '../portfolio/_DSC1460.jpg';
import img10 from '../portfolio/VW.jpg';
import img11 from '../portfolio/santacruz.jpg';
import img12 from '../portfolio/santacruz2.jpg';

const images = [
  { src: img1, alt: 'Portfolio image 1' },
  { src: img2, alt: 'Portfolio image 2' },
  { src: img3, alt: 'Portfolio image 3' },
  { src: img4, alt: 'Portfolio image 4' },
  { src: img5, alt: 'Portfolio image 5' },
  { src: img6, alt: 'Portfolio image 6' },
  { src: img7, alt: 'Portfolio image 7' },
  { src: img8, alt: 'Portfolio image 8' },
  { src: img9, alt: 'Portfolio image 9' },
  { src: img10, alt: 'Portfolio image 10' },
  { src: img11, alt: 'Portfolio image 11' },
  { src: img12, alt: 'Portfolio image 12' },
];

export default function Gallery() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="gallery">
      <div
        ref={headerRef}
        className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
      >
        <div>
          <div className="section-label">
            <span>✦</span> My work
          </div>
          <h2 className="section-title">Gallery</h2>
        </div>
      </div>

      <div ref={gridRef} className="gallery-masonry">
        {images.map((image, index) => (
          <div
            key={index}
            className={`gallery-item animate-on-scroll animate-delay-${index + 1} ${
              gridVisible ? 'visible' : ''
            }`}
            onClick={() => openLightbox(image)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>
            &times;
          </button>
          <img src={selectedImage.src} alt={selectedImage.alt} />
        </div>
      )}
    </section>
  );
}
