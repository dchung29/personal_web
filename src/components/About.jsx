import { useScrollAnimation } from '../hooks/useScrollAnimation';
import tree from '../assets/fi-br-chart-tree.png';
import clouds from '../assets/fi-br-clouds.png';
import pie from '../assets/fi-br-chart-pie.png';
import paintbrush from '../assets/fi-br-paint-brush.png';
import resume from '../assets/Da Yun Chung Resume.pdf';

const skills = [
    {
        icon: tree,
        title: 'Backend Systems',
        description: 'Building scalable APIs and distributed systems with Python, Go, and Node.js.',
    },
    {
        icon: clouds,
        title: 'Cloud Infrastructure',
        description: 'Designing cloud architecture on AWS with Terraform and Kubernetes.',
    },
    {
        icon: pie,
        title: 'Data Engineering',
        description: 'Creating data pipelines with Kafka, Spark, and real-time streaming.',
    },
    {
        icon: paintbrush, // Placeholder - you can replace with a design icon
        title: 'Design',
        description: 'Creating intuitive user interfaces and experiences with Figma, prototyping, and user-centered design principles.',
    },
];

export default function About() {
    const [headerRef, headerVisible] = useScrollAnimation(0.2);
    const [gridRef, gridVisible] = useScrollAnimation(0.1);

    return (
        <section id="about" className="about">
            <div
                ref={headerRef}
                className={`section-header animate-on-scroll ${headerVisible ? 'visible' : ''}`}
            >
                <div>
                    <div className="section-label">
                        <span>✦</span> What I do
                    </div>
                    <h2 className="section-title">My Skills</h2>
                </div>
                <a href={resume} target="_blank" rel="noopener noreferrer" className="section-link">
                    View Resume →
                </a>
            </div>

            <div ref={gridRef} className="skills-grid">
                {skills.map((skill, index) => (
                    <div
                        key={skill.title}
                        className={`skill-card animate-on-scroll animate-delay-${index + 1} ${
                            gridVisible ? 'visible' : ''
                        }`}
                    >
                        <div className="skill-icon">
                            <img src={skill.icon} alt={`${skill.title} icon`} />
                        </div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
