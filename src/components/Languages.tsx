import { Language } from '../types/cv';

interface LanguagesProps {
  languages: Language[];
}

export default function Languages({ languages }: LanguagesProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {languages.map((lang, index) => (
        <div key={index} className="border p-4 rounded">
          <h3 className="font-bold text-gray-800 mb-2">{lang.name}</h3>
          <p className="text-sm text-gray-600">{lang.level}</p>
          <div className="mt-2 space-y-1 text-xs">
            {lang.details.map((detail, i) => (
              <p key={i}>{detail}</p>
            ))}
          </div>
          {lang.note && (
            <p className="text-xs text-green-700 mt-2">{lang.note}</p>
          )}
        </div>
      ))}
    </div>
  );
}
