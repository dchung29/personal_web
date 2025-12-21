import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    title: 'DoseDock',
    description: 'An application that works with an ergonomic pill dispenser to help seniors manage their medications automatically, addressing the challenges of medication non-adherence among seniors.',
    tech: ['Go', 'React', 'GraphQL', 'SQLite'],
    githubUrl: 'https://github.com/DoseDock',
    demoUrl: null,
  },
  {
    title: 'AquaFlo',
    description: 'A multi-feature app alongside an interactive voice response system allowing outage reports with cost-effective implementation.',
    tech: ['TypeScript', 'React', 'Node.js'],
    githubUrl: 'https://github.com/dchung29/AquaFlo',
    demoUrl: null,
  },
];

export default function Projects() {
  const [headerRef, headerVisible] = useScrollAnimation(0.2);
  const [gridRef, gridVisible] = useScrollAnimation(0.1);

  return (
    <section id="projects" className="projects">
      <div
        ref={headerRef}
        className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
      >
        <div>
          <div className="section-label">
            <span>✦</span> What I've built
          </div>
          <h2 className="section-title">Projects</h2>
        </div>
      </div>

      <div ref={gridRef} className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`project-card animate-on-scroll animate-delay-${index + 1} ${
              gridVisible ? 'visible' : ''
            }`}
          >
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                aria-label={`View ${project.title} on GitHub`}
              >
                View on GitHub →
              </a>
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.tech.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

