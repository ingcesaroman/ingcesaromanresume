import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import { Download } from 'lucide-react';
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

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `${cvData.personalData.name.replace(/\s/g, '_')}_CV`,
    pageStyle: `@page { size: A4; margin: 20mm; }`, // Optional: add page styling
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div ref={componentRef} className="max-w-4xl mx-auto bg-white shadow-lg">
        <CvHeader personalData={cvData.personalData} />
        <div className="p-8 space-y-8">
          <CvSection title="PROFESSIONAL PROFILE">
            <p className="text-gray-700 leading-relaxed">
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
            <ul className="space-y-2 text-sm text-gray-700">
              {cvData.continuousLearning.map((item: string, index: number) => (
                <li key={index}>• {item}</li>
              ))}
            </ul>
          </CvSection>
          <CvSection title="LANGUAGE SKILLS">
            <Languages languages={cvData.languages} />
          </CvSection>
          <CvSection title="ADDITIONAL INFORMATION">
            <div className="space-y-2 text-sm text-gray-700">
              {cvData.additionalInfo.map((item: string, index: number) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </CvSection>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 border-t-2 border-blue-900">
          <p className="mb-2">This Europass CV has been prepared for the FIMA Program application</p>
          <p>Goethe-Institut Mexico & Federal Employment Agency of Germany</p>
          <p className="mt-2 text-xs">Date: December 2024 | Format: Europass Standard</p>
        </div>
      </div>
        {/* Download Button */}
        <div className="p-4 bg-blue-900 text-center">
          <button onClick={handlePrint} className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Download as PDF
          </button>
        </div>
    </div>
  );
}

export default App;