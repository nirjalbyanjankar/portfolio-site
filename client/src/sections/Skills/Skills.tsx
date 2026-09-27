import { skillCategories } from '../../data/skills';
export default function Skills() {
  return (
    <section id="skills" className="split-section skills-section">
      <h2>Toolkit</h2>
      <div className="skills-content">{skillCategories.map(category => (
        <div className="skill-group" key={category.title}><h3>{category.title}</h3><p>{category.skills.join(', ')}</p></div>
      ))}</div>
    </section>
  );
}
