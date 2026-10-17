import { experiences } from '../../data/experience';
export default function Experience() {
  return (
    <section id="experience" className="experience-section [padding:30px_0] text-[14px] leading-[1.7]">
      <h2>Work experience</h2>
      <div className="experience-list">{experiences.map(exp => (
        <article className="experience-item" key={exp.company + exp.role}>
          <h3><strong>{exp.company}</strong><span className="experience-separator [margin:0_9px] text-ink">&middot;</span>{exp.role}</h3>
          <p className="experience-description mt-[2px]">{exp.description}</p>
          <p className="experience-period mt-[6px] text-ink text-[14px]">{exp.period}</p>
        </article>
      ))}</div>
    </section>
  );
}
