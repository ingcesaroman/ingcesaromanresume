import { WorkExperience as WorkExperienceType } from '../types/cv';

interface WorkExperienceProps {
  experience: WorkExperienceType;
}

export default function WorkExperience({ experience }: WorkExperienceProps) {
  return (
    <div className="border-l-4 border-blue-900 pl-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{experience.position}</h3>
          <p className="text-blue-700 font-semibold">{experience.company}</p>
        </div>
        <span className="text-sm font-semibold text-gray-600">{experience.period}</span>
      </div>
      {experience.location && (
        <p className="text-sm text-gray-600 mb-2">
          {experience.location} - {experience.client}
        </p>
      )}
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {experience.tasks.map((task, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: task }}></li>
        ))}
      </ul>
      {experience.technologies && (
        <p className="text-sm text-gray-700 mt-2">
          <strong>Technologies:</strong> {experience.technologies.join(', ')}
        </p>
      )}
    </div>
  );
}
