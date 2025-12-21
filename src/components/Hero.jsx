import { useState, useEffect } from 'react';
import img1 from '../assets/0e61d7f6-f4b8-4c54-9423-2811c745b610.png';
import img2 from '../assets/31f25ffd-4533-44e9-aa3d-fd618aaea66d.png';

const images = [img1, img2];

const skills = [
  { name: 'Python', top: '10%', left: '8%' },
  { name: 'Go', top: '18%', right: '18%' },
  { name: 'Java', top: '28%', left: '8%' },
  { name: 'Kafka', top: '35%', right: '12%' },
  { name: 'AWS', top: '45%', left: '4%' },
  { name: 'Terraform', top: '55%', right: '6%' },
  { name: 'TypeScript', bottom: '45%', left: '14%' },
  { name: 'Kubernetes', bottom: '25%', right: '15%' },
  { name: 'GraphQL', bottom: '19%', left: '10%' },
  { name: 'React', top: '20%', left: '23%' },
  { name: 'GCP', top: '38%', right: '25%' },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      {/* Floating skill bubbles */}
      {skills.map((skill, index) => (
        <div
          key={skill.name}
          className="skill-bubble"
          style={{
            top: skill.top,
            left: skill.left,
            right: skill.right,
            bottom: skill.bottom,
            animationDelay: `${index * 0.3}s`,
          }}
        >
          {skill.name}
        </div>
      ))}

      <div className="hero-badge">
        <span>✦</span> Excited to build!
      </div>

      <div className="hero-image">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Profile"
            style={{ opacity: index === currentIndex ? 1 : 0 }}
          />
        ))}
      </div>

      <h1 className="hero-title">
        Software Engineer
      </h1>

      <p className="hero-subtitle">
        i like building backends, data pipelines, and infra that keeps things running (mostly) not-on-fire c:
      </p>
    </section>
  );
}
