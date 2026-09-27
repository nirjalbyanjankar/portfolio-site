import { ArrowUpRight, Github, ChevronDown, ChevronUp, Coffee, Gem, HandHeart, Dribbble, Landmark, BookOpen } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { projects } from '../../data/projects';
const projectIcons: Record<string, LucideIcon> = {
  'Himalayan Sip': Coffee,
  'Shangrila Trade Concern': Gem,
  'Khusimwelfare': HandHeart,
  'Basketboard': Dribbble,
  'BondBrokerage': Landmark,
  'Lord of the Reads': BookOpen,
};
const featuredTitles = ['Shangrila Trade Concern', 'Himalayan Sip', 'BondBrokerage'];
const orderedProjects = [
  ...featuredTitles.flatMap(title => projects.filter(project => project.title === title)),
  ...projects.filter(project => !featuredTitles.includes(project.title)),
];

interface ProjectsProps {
  expanded: boolean;
  onExpandedChange: (expanded: boolean) => void;
}

export default function Projects({ expanded, onExpandedChange }: ProjectsProps) {
  const visibleProjects = expanded ? orderedProjects : orderedProjects.slice(0, 3);
  const toggleProjects = () => {
    const willExpand = !expanded;
    onExpandedChange(willExpand);

    if (willExpand && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      window.setTimeout(() => {
        window.scrollBy({ top: 150, behavior: 'auto' });
      }, 180);
    }
  };

  return (
    <section id="projects" className="work-section">
      <div className="section-heading"><h2>Projects</h2><span className="eyebrow">DESIGN & DEVELOPMENT / 01-{String(visibleProjects.length).padStart(2, '0')}</span></div>
      <div className="project-grid" id="project-list">{orderedProjects.map((project, index) => {
        const Icon = projectIcons[project.title];
        const visible = index < 3 || expanded;
        return (
          <div
            className="project-reveal"
            key={project.title}
            data-visible={visible}
            aria-hidden={!visible}
            inert={!visible}
          >
          <article className="project">
            <div className="project-title-row"><h3><a href={project.demo || project.github} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={15} /><Icon size={18} strokeWidth={1.5} aria-hidden="true" /></a></h3>{project.github && <a className="source-link" href={project.github} target="_blank" rel="noreferrer" aria-label={project.title + ' source on GitHub'}><Github size={16} /></a>}</div>
            <p className="project-description">{project.desc}</p>
            <ul className="project-tags" aria-label="Technologies">{project.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </article>
          </div>
        );
      })}</div>
      <button
        className="projects-more"
        type="button"
        aria-expanded={expanded}
        aria-controls="project-list"
        onClick={toggleProjects}
      >
        {expanded ? 'Less' : 'More'}
        {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
      </button>
    </section>
  );
}
