import { experiences } from '../../data/experience';
export default function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Work experience</h2>
      <div className="experience-list">{experiences.map(exp => (
        <article className="experience-item" key={exp.company + exp.role}>
          <h3><strong>{exp.company}</strong><span className="experience-separator">&middot;</span>{exp.role}</h3>
          <p className="experience-description">{exp.description}</p>
          <p className="experience-period">{exp.period}</p>
        </article>
      ))}</div>
    </section>
  );
}
