import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Moon } from 'lucide-react';
import HeaderMenu from './components/HeaderMenu';
import { cvData_de } from './cv-data_de';
import { WorkExperience as WorkExperienceType, Education as EducationType } from './types/cv';
import CvHeader from './components/CvHeader';
import Languages from './components/Languages';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CvSection from './components/CvSection';
import './App.css';

function App_de() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    if (!element) {
      console.error("Kein Element zum Drucken gefunden.");
      return;
    }

    const canvas = await html2canvas(element, { scale: 2 }); // Skalierung für bessere Auflösung
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' für Hochformat, 'mm' für Millimeter, 'a4' für A4-Größe
    const imgWidth = 210; // A4-Breite in mm
    const pageHeight = 297; // A4-Höhe in mm
    const imgHeight = canvas.height * imgWidth / canvas.width;
    let heightLeft = imgHeight;

    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }
    
    pdf.save(`${cvData_de.personalData.name.replace(/\s/g, '_')}_CV.pdf`);
  };

  const getFormattedDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleString('de-DE', options);
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${isDarkMode ? 'dark bg-gray-900' : ''}`}>
      <HeaderMenu />
      <div ref={componentRef} className="max-w-4xl mx-auto bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200">
        <CvHeader personalData={cvData_de.personalData} />
        <div className="p-8 space-y-8">
          <CvSection title="BERUFSPROFIL">
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {cvData_de.professionalProfile.summary}
            </p>
          </CvSection>
          <CvSection title="BERUFSERFAHRUNG">
            {cvData_de.workExperience.map((experience: WorkExperienceType, index: number) => (
              <WorkExperience key={index} experience={experience} />
            ))}
          </CvSection>
          <CvSection title="AUSBILDUNG">
            {cvData_de.education.map((education: EducationType, index: number) => (
              <Education key={index} education={education} />
            ))}
          </CvSection>
          <CvSection title="TECHNISCHE FÄHIGKEITEN">
            <TechnicalSkills skills={cvData_de.technicalSkills} />
          </CvSection>
          <CvSection title="PROJEKTE & ERFOLGE">
            <Projects projects={cvData_de.projects} />
          </CvSection>
          <CvSection title="KONTINUIERLICHES LERNEN & ZERTIFIZIERUNGEN">
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData_de.continuousLearning.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CvSection>
          <CvSection title="SPRACHKENNTNISSE">
            <Languages languages={cvData_de.languages} />
          </CvSection>
          <CvSection title="ZUSÄTZLICHE INFORMATIONEN">
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData_de.additionalInfo.map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </CvSection>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 border-t-2 border-blue-900 dark:bg-gray-700 dark:text-gray-300 dark:border-blue-700">
          <p className="mb-2">Dieser Europass-Lebenslauf wurde für die Bewerbung zum FIMA-Programm erstellt</p>
          <p>Goethe-Institut Mexiko & Bundesagentur für Arbeit</p>
          <p className="mt-2 text-xs">Datum: {getFormattedDate()} | Format: Europass Standard</p>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Dunkelmodus umschalten"
        >
          <Moon className="w-6 h-6" />
        </button>

        {/* Download Button */}
        <button onClick={handleDownloadPdf} className="bg-blue-900 text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors flex items-center justify-center">
          <Download className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default App_de;