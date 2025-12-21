import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

import abnormalLogo from '../assets/abnormal_ai_logo.jpeg';
import commureLogo from '../assets/commure_logo.jpeg';
import athelasLogo from '../assets/athelas_logo.jpeg';
import versatermLogo from '../assets/versaterm_inc_logo.jpeg';
import geotabLogo from '../assets/geotab_logo.jpeg';
import raymondJamesLogo from '../assets/raymond_james_financial_inc__logo.jpeg';

const experiences = [
  {
    company: 'Abnormal AI',
    role: 'Software Engineer Intern',
    date: 'May — Aug 2025',
    logo: abnormalLogo,
    description: 'Building security solutions with cutting-edge AI technology.',
  },
  {
    company: 'Commure',
    role: 'Software Engineer Intern',
    date: 'Sept — Dec 2024',
    logo: commureLogo,
    description: 'Developing healthcare technology solutions to improve patient care.',
  },
  {
    company: 'Athelas',
    role: 'Software Engineer Intern',
    date: 'Jan — April 2024',
    logo: athelasLogo,
    description: 'Creating innovative medical devices and software for healthcare.',
  },
  {
    company: 'CI Technologies',
    role: 'Software Engineer Intern',
    date: 'May — Aug 2023',
    logo: versatermLogo,
    description: 'Building software solutions for public safety and law enforcement.',
  },
  {
    company: 'Geotab',
    role: 'Software Engineer Intern',
    date: 'Sept — Dec 2022',
    logo: geotabLogo,
    description: 'Developing telematics and fleet management solutions.',
  },
  {
    company: 'Raymond James',
    role: 'Web Developer',
    date: 'Jan — April 2022',
    logo: raymondJamesLogo,
    description: 'Creating web applications for financial services and investment management.',
  },
];

export default function Experience() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [timelineRef, timelineVisible] = useScrollAnimation(0.1);
  const [activeCard, setActiveCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sectionRef.current && !sectionRef.current.contains(event.target)) {
        setActiveCard(null);
      }
    };

    if (activeCard !== null) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeCard]);

  const handleCardInteraction = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    // Only show on hover for desktop (not touch devices)
    if (window.matchMedia('(hover: hover)').matches) {
      setHoveredCard(index);
    }
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div
        ref={headerRef}
        className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
      >
        <div>
          <div className="section-label">
            <span>✦</span> Where I've worked
          </div>
          <h2 className="section-title">Experience</h2>
        </div>
      </div>

      <div ref={timelineRef} className="timeline">
        {experiences.map((exp, index) => {
          const isActive = activeCard === index || hoveredCard === index;
          const isHovered = hoveredCard === index && activeCard !== index;
          return (
            <div
              key={exp.company}
              className={`timeline-item animate-on-scroll animate-delay-${index + 1} ${timelineVisible ? 'visible' : ''} ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
              onClick={(e) => {
                e.stopPropagation();
                handleCardInteraction(index);
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleCardInteraction(index);
                }
              }}
            >
              <div className={`timeline-dot ${isHovered ? 'hidden' : ''}`} />
              <div className="timeline-logo">
                <img src={exp.logo} alt={exp.company} />
              </div>
              <div className="timeline-content">
                <h3 className="timeline-company">{exp.company}</h3>
                <p className="timeline-role">{exp.role}</p>
              </div>
              <div className="timeline-date">{exp.date}</div>
              
              {isActive && (
                <div className="experience-card">
                  <div className="experience-card-header">
                    <div className="experience-card-logo">
                      <img src={exp.logo} alt={exp.company} />
                    </div>
                    <div className="experience-card-info">
                      <h3 className="experience-card-company">{exp.company}</h3>
                      <p className="experience-card-role">{exp.role}</p>
                      <p className="experience-card-date">{exp.date}</p>
                    </div>
                  </div>
                  <div className="experience-card-body">
                    <p className="experience-card-description">{exp.description}</p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
