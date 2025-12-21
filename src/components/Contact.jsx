import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className={`animate-on-scroll ${isVisible ? 'visible' : ''}`}>
        <div className="section-label">
          <span>✦</span> Get in touch
        </div>
        <h2 className="section-title">Let's work together!</h2>
      </div>

      <a
        href="dychung@uwaterloo.ca"
        className={`contact-email animate-on-scroll animate-delay-2 ${isVisible ? 'visible' : ''}`}
      >
        dychung@uwaterloo.ca →
      </a>

      <p className={`contact-description animate-on-scroll animate-delay-3 ${isVisible ? 'visible' : ''}`}>
        I'm always interested in hearing about new projects and opportunities. Let's create something amazing together.
      </p>

      <div className={`contact-socials animate-on-scroll animate-delay-4 ${isVisible ? 'visible' : ''}`}>
        <a href="https://github.com/dchung29" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/dayun-chung/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </section>
  );
}
