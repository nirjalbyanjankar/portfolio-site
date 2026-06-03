import React from 'react';
import { ExternalLink, Github, Code2, HandHeart, Dribbble, Landmark, BookOpen, Calendar } from 'lucide-react';

interface Project {
  title: string;
  desc: string;
  tags: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
}

interface ProjectsProps {
  theme: 'light' | 'dark';
}

const Projects: React.FC<ProjectsProps> = ({ theme = 'light' }) => {
  const projects: Project[] = [
    {
      title: "Himalayan Sip",
      desc: "Cafe website built to showcase the brand with a clean, inviting interface and a modern browsing experience.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: Calendar,
      github: "https://github.com/nirjalbyanjankar/himalayansip",
      demo: "https://himalayansip.vercel.app/"
    },
    {
      title: "Shangrila Trade Concern",
      desc: "Website for a gem trading company, built to present the brand with a polished, responsive, and modern web experience.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      icon: Code2,
      github: "https://github.com/nirjalbyanjankar/shangrila-trade",
      demo: "https://shangrilatradeconcern.com.np/"
    },
    {
      title: "Khusimwelfare",
      desc: "Website design for a welfare organization, created with Figma to showcase modern UI/UX principles and responsive design.",
      tags: ["Figma", "UI/UX Design", "Web Design", "Prototyping"],
      icon: HandHeart,
      github: undefined,
      demo: "https://www.figma.com/design/ecjsXATM4G01psLtXIB3Dw/KhusimWelfare?node-id=0-1&p=f&t=LCIldZSG0VLKKMhL-0"
    },
    {
      title: "Basketboard",
      desc: "Full-stack basketball coaching web application with payment integration, real-time chat, and live notifications.",
      tags: ["React", "Node.js", "Express", "Socket.io", "PostgreSQL", "Khalti API"],
      icon: Dribbble,
      github: "https://github.com/nirjaley/basketboard",
      demo: "https://basketboard-five.vercel.app/"
    },
    {
      title: "BondBrokerage",
      desc: "Modern website design for a bond brokerage company, created with Figma to showcase financial services and investment opportunities.",
      tags: ["Figma", "UI/UX Design", "Finance", "Web Design"],
      icon: Landmark,
      github: undefined,
      demo: "https://www.figma.com/design/mNjRnpFh84l4ZBlGLYPRFu/BondBrokerage"
    },
    {
      title: "Lord of the Reads",
      desc: "A collaborative e-commerce library platform for book lovers, featuring a full-stack solution with user accounts, book listings, and a seamless reading experience.",
      tags: ["React", "Vite", "JavaScript", "C#", "PostgreSQL", "Tailwind"],
      icon: BookOpen,
      github: "https://github.com/Prajesh-Shrestha-Github/LordofTheReads",
    }
  ];

  return (
    <section id="projects" className={`py-20 md:py-24 transition-colors duration-300 ${
      theme === 'light' ? 'bg-white' : 'bg-gray-900'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium mb-4 ${
            theme === 'light' 
              ? 'bg-blue-100 text-blue-600' 
              : 'bg-blue-900/30 text-blue-400'
          }`}>
            My Work
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            theme === 'light' ? 'text-gray-900' : 'text-white'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 mx-auto rounded-full ${
            theme === 'light' ? 'bg-gray-900' : 'bg-white'
          }`}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.title}
                className={`p-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${
                  theme === 'light'
                    ? 'bg-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-800 hover:shadow-2xl'
                }`}
              >
                {/* Icon and Links */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl transition-colors ${
                    theme === 'light' 
                      ? 'bg-blue-100 group-hover:bg-blue-200' 
                      : 'bg-blue-900/30 group-hover:bg-blue-900/50'
                  }`}>
                    <IconComponent className={`w-6 h-6 ${
                      theme === 'light' ? 'text-blue-600' : 'text-blue-400'
                    }`} />
                  </div>
                  
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                          theme === 'light'
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        }`}
                        aria-label={`View ${project.title} on GitHub`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                          theme === 'light'
                            ? 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        }`}
                        aria-label={`View ${project.title} demo`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-bold mb-3 ${
                  theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className={`text-sm mb-4 leading-relaxed ${
                  theme === 'light' ? 'text-gray-600' : 'text-gray-300'
                }`}>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 cursor-default ${
                        theme === 'light'
                          ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
