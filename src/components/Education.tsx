import { Education as EducationType } from '../types/cv';

interface EducationProps {
  education: EducationType;
}

export default function Education({ education }: EducationProps) {
  return (
    <div className="border-l-4 border-blue-900 pl-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{education.degree}</h3>
          <p className="text-blue-700 font-semibold">{education.institution}</p>
        </div>
        <span className="text-sm font-semibold text-gray-600">{education.period}</span>
      </div>
      <p className="text-sm text-gray-600">{education.location}</p>
      {education.focus && <p className="text-sm text-gray-700 mt-1">Focus: {education.focus}</p>}
    </div>
  );
}
