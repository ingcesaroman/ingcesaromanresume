import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Moon } from 'lucide-react';
import HeaderMenu from './components/HeaderMenu';
import { cvData_es } from './cv-data_es';
import { WorkExperience as WorkExperienceType, Education as EducationType } from './types/cv';
import CvHeader from './components/CvHeader';
import Languages from './components/Languages';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CvSection from './components/CvSection';
import './App.css';

function App_es() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    if (!element) {
      console.error("No se pudo encontrar el elemento para imprimir.");
      return;
    }

    const canvas = await html2canvas(element, { scale: 2 }); // Scale for better resolution
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'mm', 'a4'); // 'p' for portrait, 'mm' for millimeters, 'a4' for A4 size
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 297; // A4 height in mm
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
    
    pdf.save(`${cvData_es.personalData.name.replace(/\s/g, '_')}_CV.pdf`);
  };

  const getFormattedDate = () => {
    const date = new Date();
    const options: Intl.DateTimeFormatOptions = { month: 'long', year: 'numeric' };
    return date.toLocaleString('es-ES', options);
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${isDarkMode ? 'dark bg-gray-900' : ''}`}>
      <HeaderMenu />
      <div ref={componentRef} className="max-w-4xl mx-auto bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200">
        <CvHeader personalData={cvData_es.personalData} />
        <div className="p-8 space-y-8">
          <CvSection title="PERFIL PROFESIONAL">
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {cvData_es.professionalProfile.summary}
            </p>
          </CvSection>
          <CvSection title="EXPERIENCIA LABORAL">
            {cvData_es.workExperience.map((experience: WorkExperienceType, index: number) => (
              <WorkExperience key={index} experience={experience} />
            ))}
          </CvSection>
          <CvSection title="EDUCACIÓN">
            {cvData_es.education.map((education: EducationType, index: number) => (
              <Education key={index} education={education} />
            ))}
          </CvSection>
          <CvSection title="HABILIDADES TÉCNICAS">
            <TechnicalSkills skills={cvData_es.technicalSkills} />
          </CvSection>
          <CvSection title="PROYECTOS Y LOGROS">
            <Projects projects={cvData_es.projects} />
          </CvSection>
          <CvSection title="APRENDIZAJE CONTINUO Y CERTIFICACIONES">
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData_es.continuousLearning.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CvSection>
          <CvSection title="HABILIDADES LINGÜÍSTICAS">
            <Languages languages={cvData_es.languages} />
          </CvSection>
          <CvSection title="INFORMACIÓN ADICIONAL">
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData_es.additionalInfo.map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </CvSection>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 border-t-2 border-blue-900 dark:bg-gray-700 dark:text-gray-300 dark:border-blue-700">
          <p className="mb-2">Este CV Europass ha sido preparado para la aplicación al Programa FIMA</p>
          <p>Goethe-Institut México y Agencia Federal de Empleo de Alemania</p>
          <p className="mt-2 text-xs">Fecha: {getFormattedDate()} | Formato: Europass Standard</p>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Alternar modo oscuro"
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

export default App_es;