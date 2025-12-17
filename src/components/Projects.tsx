import { Project } from '../types/cv';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <div className="space-y-4">
      {projects.map((project, index) => (
        <div key={index} className="border-l-4 border-green-600 pl-4 dark:border-green-400">
          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{project.name}</h3>
          {project.url && (
            <p className="text-sm text-gray-600 mb-2 dark:text-gray-400">{project.url}</p>
          )}
          <p className="text-sm text-gray-700 mb-2 dark:text-gray-300">{project.description}</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-300">
            {project.highlights.map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
