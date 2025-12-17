import React from 'react';
import { Download, Globe, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';

export default function EuropassCV() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header with Europass styling */}
        <div className="bg-blue-900 text-white p-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">CÉSAR ROMÁN CAMACHO</h1>
              <p className="text-xl text-blue-200">Senior QA Automation Engineer | Team Lead</p>
            </div>
            <div className="text-right text-sm">
              <p className="font-semibold">Europass Curriculum Vitae</p>
              <p>Format for FIMA Program</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-2 gap-4 p-8 bg-gray-50 border-b-2 border-blue-900">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>ing.cesaroman@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Phone className="w-4 h-4 text-blue-900" />
              <span>+52 1 55 3751 5615</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="w-4 h-4 text-blue-900" />
              <span>Mexico City, Mexico</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <Github className="w-4 h-4 text-blue-900" />
              <span>github.com/ingcesaroman</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Linkedin className="w-4 h-4 text-blue-900" />
              <span>LinkedIn Profile</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Globe className="w-4 h-4 text-blue-900" />
              <span>Nationality: Mexican</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8 space-y-8">
          
          {/* Professional Profile */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              PROFESSIONAL PROFILE
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Senior QA Automation Engineer with 5+ years of progressive experience leading quality assurance initiatives for enterprise applications. Proven expertise in designing and implementing comprehensive test automation frameworks using Java, Selenium, and CI/CD pipelines. Currently leading a team of 5 QA professionals managing end-to-end testing for 20+ insurance applications serving international markets. Specialized in Agile methodologies, performance testing, and emerging AI-powered testing solutions.
            </p>
          </section>

          {/* Work Experience */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              WORK EXPERIENCE
            </h2>
            
            <div className="space-y-6">
              {/* Current Position */}
              <div className="border-l-4 border-blue-900 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Senior QA Automation Engineer / Team Lead</h3>
                    <p className="text-blue-700 font-semibold">ASCEND (IT Consulting)</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Nov 2020 - Present</span>
                </div>
                <p className="text-sm text-gray-600 mb-2">New Orleans, USA (Remote) - Insurance Sector Client</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li><strong>Lead QA team of 5 professionals</strong> (manual and automation testers) across multiple insurance applications</li>
                  <li><strong>Architect and maintain test automation framework</strong> for 20+ web applications using Java, Gradle, Selenium WebDriver, and TestNG</li>
                  <li><strong>Implement CI/CD pipeline</strong> in GitLab with automated test execution for each release across multiple countries</li>
                  <li><strong>Design and execute comprehensive testing strategy</strong> including E2E, regression, smoke, and performance testing</li>
                  <li><strong>Manage sprint planning and task allocation</strong> within Agile/SCRUM framework (2-week sprints, 3-month PI cycles)</li>
                  <li><strong>Achieve 85% test automation coverage</strong> reducing manual testing time by 60% and defect escape rate by 40%</li>
                  <li><strong>Coordinate testing activities</strong> using Jira and Kanban boards for backlog management and story tracking</li>
                  <li><strong>Develop 20th application</strong> - comprehensive insurance policy management system with multi-entity support</li>
                  <li><strong>Technologies:</strong> Java, Selenium WebDriver, TestNG, Gradle, GitLab CI/CD, Postman, JMeter, Jira, SQL</li>
                </ul>
              </div>

              {/* Previous Position */}
              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Senior QA Automation Engineer</h3>
                    <p className="text-blue-700 font-semibold">WIPRO Technologies</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">May 2020 - Nov 2020</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Performed web automation testing using Cypress framework with JavaScript</li>
                  <li>Executed performance testing using Apache JMeter for load and stress testing scenarios</li>
                  <li>Conducted API testing using Postman with automated test collections</li>
                  <li>Created test plans, test cases, defect reports, and comprehensive test documentation</li>
                </ul>
              </div>

              {/* Earlier Position */}
              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">QA Senior Engineer</h3>
                    <p className="text-blue-700 font-semibold">IDS TI</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Nov 2019 - May 2020</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Performed end-to-end, regression, and smoke testing for enterprise applications</li>
                  <li>Designed and executed test plans, test cases, and comprehensive testing documentation</li>
                  <li>Managed defect lifecycle and produced detailed test progress reports</li>
                </ul>
              </div>

              {/* BeJumper */}
              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">QA Tester</h3>
                    <p className="text-blue-700 font-semibold">BeJUMPER Consulting</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Aug 2019 - Nov 2019</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Managed tasks and defect reporting using Jira</li>
                  <li>Performed requirement analysis and functional test case design for SQL databases and web services</li>
                  <li>Prepared and maintained testing environments</li>
                </ul>
              </div>

              {/* Nissan */}
              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Software Tester</h3>
                    <p className="text-blue-700 font-semibold">NISSAN Mexicana</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">Jun 2016 - Jan 2019</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Managed SAP transition from legacy C++ software to SAP Solution Manager</li>
                  <li>Tested custom environments designed for local manufacturing operations</li>
                  <li>Developed test strategies, test plans, and data requirements</li>
                  <li>Performed white box testing including functionality and integration testing</li>
                  <li>Conducted UAT presentations and test strategy reviews</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              EDUCATION
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-blue-900 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Bachelor of Engineering in Robotics Engineering</h3>
                    <p className="text-blue-700 font-semibold">ESIME, Instituto Politécnico Nacional (IPN)</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">2010 - 2015</span>
                </div>
                <p className="text-sm text-gray-600">Mexico City, Mexico</p>
                <p className="text-sm text-gray-700 mt-1">Focus: Software Engineering, Automation Systems, Control Theory</p>
              </div>

              <div className="border-l-4 border-gray-400 pl-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">Technical Degree in Telecommunications</h3>
                    <p className="text-blue-700 font-semibold">CECYT No.10, Instituto Politécnico Nacional (IPN)</p>
                  </div>
                  <span className="text-sm font-semibold text-gray-600">2007 - 2010</span>
                </div>
                <p className="text-sm text-gray-600">Mexico City, Mexico</p>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              TECHNICAL SKILLS
            </h2>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Test Automation & QA</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Selenium WebDriver (Expert)</li>
                  <li>• Cypress.io (Advanced)</li>
                  <li>• Appium (Mobile Testing)</li>
                  <li>• TestNG, JUnit (Frameworks)</li>
                  <li>• Cucumber, Mocha, Chai (BDD)</li>
                  <li>• HP Quality Center, Jira</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Programming & Development</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Java (Expert Level)</li>
                  <li>• JavaScript, Node.js (Advanced)</li>
                  <li>• React.js (Frontend Development)</li>
                  <li>• Python (Data Analysis, ML)</li>
                  <li>• SQL, MongoDB (Databases)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2">DevOps & Tools</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• GitLab CI/CD, Jenkins</li>
                  <li>• Docker, Kubernetes</li>
                  <li>• Gradle, Maven (Build Tools)</li>
                  <li>• Git, GitHub (Version Control)</li>
                  <li>• Postman, SoapUI (API Testing)</li>
                  <li>• JMeter (Performance Testing)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-gray-800 mb-2">Methodologies & Practices</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Agile/SCRUM (Certified Practitioner)</li>
                  <li>• Test-Driven Development (TDD)</li>
                  <li>• Behavior-Driven Development (BDD)</li>
                  <li>• Continuous Integration/Deployment</li>
                  <li>• Page Object Model (POM)</li>
                  <li>• Risk-Based Testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects & Achievements */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              PROJECTS & ACHIEVEMENTS
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-bold text-gray-800">AI Testing Framework (Open Source)</h3>
                <p className="text-sm text-gray-600 mb-2">github.com/ingcesaroman/ai-testing-framework</p>
                <p className="text-sm text-gray-700 mb-2">
                  Innovative testing framework leveraging AI for automated test case generation and execution using Java, Selenium WebDriver, and Model Context Protocol (MCP) with Playwright integration.
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Thread-safe WebDriver management for parallel test execution</li>
                  <li>AI-powered test generation from user stories</li>
                  <li>Smart test execution with risk-based prioritization</li>
                  <li>Self-healing test automation capabilities</li>
                </ul>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-lg font-bold text-gray-800">Enterprise Insurance Testing Suite</h3>
                <p className="text-sm text-gray-600 mb-2">ASCEND - Fortune 500 Client</p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
                  <li>Architected and implemented comprehensive test automation framework covering 20+ applications</li>
                  <li>Reduced regression testing cycle time from 2 weeks to 2 days (85% reduction)</li>
                  <li>Implemented country-specific test suites for multi-region deployment validation</li>
                  <li>Achieved 99.5% uptime in production releases through rigorous automated testing</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Continuous Learning */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              CONTINUOUS LEARNING & CERTIFICATIONS
            </h2>
            
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Generative AI & AI Agents</strong> - Codecademy (In Progress, 2024-2025)</li>
              <li>• <strong>Data Analysis Fundamentals</strong> - Self-study for ML/LLM applications (2024)</li>
              <li>• <strong>Advanced CI/CD & Docker</strong> - Professional Development (2023-2024)</li>
              <li>• <strong>Full-Stack Web Development</strong> - JavaScript, React, Node.js, MongoDB (2022-2023)</li>
              <li>• <strong>Agile & SCRUM Methodologies</strong> - Applied in production environment (2020-Present)</li>
            </ul>
          </section>

          {/* Language Skills */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              LANGUAGE SKILLS
            </h2>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="border p-4 rounded">
                <h3 className="font-bold text-gray-800 mb-2">Spanish</h3>
                <p className="text-sm text-gray-600">Native Language</p>
                <div className="mt-2 space-y-1 text-xs">
                  <p>Listening: C2</p>
                  <p>Reading: C2</p>
                  <p>Speaking: C2</p>
                  <p>Writing: C2</p>
                </div>
              </div>
              
              <div className="border p-4 rounded bg-green-50">
                <h3 className="font-bold text-gray-800 mb-2">English</h3>
                <p className="text-sm text-gray-600">Advanced Professional (C1)</p>
                <div className="mt-2 space-y-1 text-xs">
                  <p>Listening: C1</p>
                  <p>Reading: C1</p>
                  <p>Speaking: C1</p>
                  <p>Writing: C1</p>
                </div>
                <p className="text-xs text-green-700 mt-2">Daily use in professional environment</p>
              </div>
              
              <div className="border p-4 rounded bg-blue-50">
                <h3 className="font-bold text-gray-800 mb-2">German</h3>
                <p className="text-sm text-gray-600">Elementary (A1)</p>
                <div className="mt-2 space-y-1 text-xs">
                  <p>Listening: A1</p>
                  <p>Reading: A1</p>
                  <p>Speaking: A1</p>
                  <p>Writing: A1</p>
                </div>
                <p className="text-xs text-blue-700 mt-2 font-semibold">Enrolled in Goethe-Institut program through FIMA</p>
              </div>
            </div>
          </section>

          {/* Additional Information */}
          <section>
            <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900">
              ADDITIONAL INFORMATION
            </h2>
            
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Work Authorization:</strong> Mexican citizen, eligible for FIMA program visa sponsorship</p>
              <p><strong>Availability:</strong> Ready to relocate to Germany with 2-month notice period</p>
              <p><strong>Remote Work Experience:</strong> 5 years managing international teams remotely</p>
              <p><strong>Cultural Adaptability:</strong> Proven experience working with multicultural teams (USA, Mexico, international clients)</p>
              <p><strong>Professional Development:</strong> Active participant in tech communities, continuous learner in AI/ML technologies</p>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 p-6 text-center text-sm text-gray-600 border-t-2 border-blue-900">
          <p className="mb-2">This Europass CV has been prepared for the FIMA Program application</p>
          <p>Goethe-Institut Mexico & Federal Employment Agency of Germany</p>
          <p className="mt-2 text-xs">Date: December 2024 | Format: Europass Standard</p>
        </div>

        {/* Download Button */}
        <div className="p-4 bg-blue-900 text-center">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition flex items-center gap-2 mx-auto">
            <Download className="w-5 h-5" />
            Download as PDF
          </button>
        </div>
      </div>
    </div>
  );
}