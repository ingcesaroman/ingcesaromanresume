import { Language } from '../types/cv';

interface LanguagesProps {
  languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {languages.map((lang, index) => (
        <div key={index} className="border p-4 rounded dark:border-gray-600">
          <h3 className="font-bold text-gray-800 mb-2 dark:text-gray-200">{lang.name}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{lang.level}</p>
          <div className="mt-2 space-y-1 text-xs dark:text-gray-300">
            {lang.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
          {lang.note && (
            <p className="text-xs text-green-700 mt-2 dark:text-green-400">{lang.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
