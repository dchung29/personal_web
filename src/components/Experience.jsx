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
    description: 'AI-native cybersecurity company protecting enterprises from email-based attacks. Built the company\'s first MSK alerting system, developed Kafka chaos-testing tools, and modernized infrastructure protecting pipelines processing 10k+ msgs/sec.',
  },
  {
    company: 'Commure',
    role: 'Software Engineer Intern',
    date: 'Sept — Dec 2024',
    logo: commureLogo,
    description: 'Healthcare platform providing AI-powered solutions for health systems. Built GCP workflows automating thousands of medical claims daily, generating $1M+ ARR, and developed CI/CD pipelines for deployment validation.',
  },
  {
    company: 'Athelas',
    role: 'Software Engineer Intern',
    date: 'Jan — April 2024',
    logo: athelasLogo,
    description: 'Healthcare technology company specializing in revenue cycle management and remote patient monitoring. Designed an automated billing system saving 75+ hours daily across 48 practices and optimized workflows by 3x.',
  },
  {
    company: 'CI Technologies',
    role: 'Software Engineer Intern',
    date: 'May — Aug 2023',
    logo: versatermLogo,
    description: 'Provider of internal affairs software for public safety agencies. Built metrics dashboards for API performance insights and developed Spring backend services supporting 15k+ daily users.',
  },
  {
    company: 'Geotab',
    role: 'Software Engineer Intern',
    date: 'Sept — Dec 2022',
    logo: geotabLogo,
    description: 'Global leader in fleet telematics processing 80B+ data points daily. Performed database migrations, designed MVC interfaces, and built responsive React components.',
  },
  {
    company: 'Raymond James',
    role: 'Web Developer',
    date: 'Jan — April 2022',
    logo: raymondJamesLogo,
    description: 'Fortune 500 financial services firm providing wealth management and investment banking. Built and maintained internal web applications for financial advisors.',
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
