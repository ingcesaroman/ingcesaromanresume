import { Skill } from '../types/cv';

interface TechnicalSkillsProps {
  skills: Skill[];
}

export default function TechnicalSkills({ skills }: TechnicalSkillsProps) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <h3 className="font-bold text-gray-800 mb-2 dark:text-gray-200">{skill.category}</h3>
          <ul className="text-sm text-gray-700 space-y-1 dark:text-gray-300">
            {skill.skills.map((s, i) => (
              <li key={i}>• {s}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
