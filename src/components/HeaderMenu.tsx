import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const languageOptions = [
  { code: 'en', name: 'English', path: '/' },
  { code: 'es', name: 'Español', path: '/es' },
  { code: 'de', name: 'Deutsch', path: '/de' },
];

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const getCurrentLanguage = () => {
    const currentPath = location.pathname;
    const language = languageOptions.find(lang => lang.path === currentPath);
    return language ? language.code.toUpperCase() : 'EN';
  };

  return (
    <div className="absolute top-4 right-4 z-10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-2 rounded-md shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Select language"
      >
        <span>{getCurrentLanguage()}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-xl">
          <div className="py-1">
            {languageOptions.map((lang) => (
              <Link
                key={lang.code}
                to={lang.path}
                className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 ${location.pathname === lang.path ? 'font-bold' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {lang.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
