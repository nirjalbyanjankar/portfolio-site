import { skillCategories } from '../../data/skills';
export default function Skills() {
  return (
    <section id="skills" className="split-section [border-top:1px_solid_var(--line)] [padding:30px_0] grid grid-cols-[1fr] gap-[22px] skills-section">
      <h2>Toolkit</h2>
      <div className="skills-content">{skillCategories.map(category => (
        <div className="skill-group grid grid-cols-[170px_minmax(0,_1fr)] gap-[16px] items-baseline" key={category.title}><h3>{category.title}</h3><p>{category.skills.join(', ')}</p></div>
      ))}</div>
    </section>
  );
}
