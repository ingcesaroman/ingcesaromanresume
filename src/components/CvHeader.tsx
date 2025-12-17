import { PersonalData } from '../types/cv';
import { Globe, Mail, Github, Linkedin, MapPin } from 'lucide-react';

interface CvHeaderProps {
  personalData: PersonalData;
}

export default function CvHeader({ personalData }: CvHeaderProps) {
  return (
    <>
      <div className="bg-blue-900 text-white p-8">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold mb-2">{personalData.name}</h1>
            <p className="text-xl text-blue-200">{personalData.title}</p>
          </div>
          <div className="text-right text-sm">
            <p className="font-semibold">Europass Curriculum Vitae</p>
            <p>Format for FIMA Program</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 p-8 bg-gray-50 border-b-2 border-blue-900 dark:bg-gray-700 dark:border-blue-700">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Mail className="w-4 h-4 text-blue-900 dark:text-blue-300" />
            <span className="dark:text-gray-300">{personalData.email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-blue-900 dark:text-blue-300" />
            <span className="dark:text-gray-300">{personalData.location}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Github className="w-4 h-4 text-blue-900 dark:text-blue-300" />
            <span className="dark:text-gray-300">{personalData.github}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Linkedin className="w-4 h-4 text-blue-900 dark:text-blue-300" />
            <span className="dark:text-gray-300">{personalData.linkedin}</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <Globe className="w-4 h-4 text-blue-900 dark:text-blue-300" />
            <span className="dark:text-gray-300">Nationality: {personalData.nationality}</span>
          </div>
        </div>
      </div>
    </>
  );
}
