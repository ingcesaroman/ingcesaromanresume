import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Moon } from 'lucide-react';
import { cvData } from './cv-data';
import { WorkExperience as WorkExperienceType, Education as EducationType } from './types/cv';
import CvHeader from './components/CvHeader';
import Languages from './components/Languages';
import Projects from './components/Projects';
import TechnicalSkills from './components/TechnicalSkills';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import CvSection from './components/CvSection';
import './App.css';

function App() {
  const componentRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  const handleDownloadPdf = async () => {
    const element = componentRef.current;
    if (!element) {
      console.error("No element to print.");
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

    pdf.save(`${cvData.personalData.name.replace(/\s/g, '_')}_CV.pdf`);
  };

  return (
    <div className={`min-h-screen bg-gray-50 p-8 ${isDarkMode ? 'dark bg-gray-900' : ''}`}>
      <div ref={componentRef} className="max-w-4xl mx-auto bg-white shadow-lg dark:bg-gray-800 dark:text-gray-200">
        <CvHeader personalData={cvData.personalData} />
        <div className="p-8 space-y-8">
          <CvSection title="PROFESSIONAL PROFILE">
            <p className="text-gray-700 leading-relaxed dark:text-gray-300">
              {cvData.professionalProfile.summary}
            </p>
          </CvSection>
          <CvSection title="WORK EXPERIENCE">
            {cvData.workExperience.map((experience: WorkExperienceType, index: number) => (
              <WorkExperience key={index} experience={experience} />
            ))}
          </CvSection>
          <CvSection title="EDUCATION">
            {cvData.education.map((education: EducationType, index: number) => (
              <Education key={index} education={education} />
            ))}
          </CvSection>
          <CvSection title="TECHNICAL SKILLS">
            <TechnicalSkills skills={cvData.technicalSkills} />
          </CvSection>
          <CvSection title="PROJECTS & ACHIEVEMENTS">
            <Projects projects={cvData.projects} />
          </CvSection>
          <CvSection title="CONTINUOUS LEARNING & CERTIFICATIONS">
            <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData.continuousLearning.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CvSection>
          <CvSection title="LANGUAGE SKILLS">
            <Languages languages={cvData.languages} />
          </CvSection>
          <CvSection title="ADDITIONAL INFORMATION">
            <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
              {cvData.additionalInfo.map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </CvSection>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 border-t-2 border-blue-900 dark:bg-gray-700 dark:text-gray-300 dark:border-blue-700">
          <p className="mb-2">This Europass CV has been prepared for the FIMA Program application</p>
          <p>Goethe-Institut Mexico & Federal Employment Agency of Germany</p>
          <p className="mt-2 text-xs">Date: December 2024 | Format: Europass Standard</p>
        </div>
      </div>
      {/* Action Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col space-y-2">
        {/* Dark Mode Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-600"
          aria-label="Toggle dark mode"
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

export default App;