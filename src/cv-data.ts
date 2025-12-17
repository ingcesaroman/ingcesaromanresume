import { CvData } from './types/cv';

export const cvData: CvData = {
  personalData: {
    name: 'CÉSAR ROMÁN SANTILLÁN',
    title: 'Senior QA Automation Engineer | Team Lead',
    email: 'ing.cesaroman@gmail.com',
    location: 'Mexico City, Mexico',
    github: 'github.com/ingcesaroman',
    linkedin: 'https://www.linkedin.com/in/cesar-roman-santillan/',
    nationality: 'Mexican',
  },
  professionalProfile: {
    summary:
      'Senior QA Automation Engineer with 5+ years of progressive experience leading quality assurance initiatives for enterprise applications. Proven expertise in designing and implementing comprehensive test automation frameworks using Java, Selenium, and CI/CD pipelines. Currently leading a team of 5 QA professionals managing end-to-end testing for 20+ insurance applications serving international markets. Specialized in Agile methodologies, performance testing, and emerging AI-powered testing solutions.',
  },
  workExperience: [
    {
      position: 'Senior QA Automation Engineer / Team Lead',
      company: 'ASCEND (IT Consulting)',
      period: 'Nov 2020 - Present',
      location: 'New Orleans, USA (Remote)',
      client: 'Insurance Sector Client',
      tasks: [
        'Lead QA team of 5 professionals (manual and automation testers) across multiple insurance applications',
        'Architect and maintain test automation framework for 20+ web applications using Java, Gradle, Selenium WebDriver, and TestNG',
        'Implement CI/CD pipeline in GitLab with automated test execution for each release across multiple countries',
        'Design and execute comprehensive testing strategy including E2E, regression, smoke, and performance testing',
        'Manage sprint planning and task allocation within Agile/SCRUM framework (2-week sprints, 3-month PI cycles)',
        'Achieve 85% test automation coverage reducing manual testing time by 60% and defect escape rate by 40%',
        'Coordinate testing activities using Jira and Kanban boards for backlog management and story tracking',
        'Develop 20th application - comprehensive insurance policy management system with multi-entity support',
      ],
      technologies: [
        'Java',
        'Selenium WebDriver',
        'TestNG',
        'Gradle',
        'GitLab CI/CD',
        'Postman',
        'JMeter',
        'Jira',
        'SQL',
      ],
    },
    {
      position: 'Senior QA Automation Engineer',
      company: 'WIPRO Technologies',
      period: 'May 2020 - Nov 2020',
      location: '',
      tasks: [
        'Performed web automation testing using Cypress framework with JavaScript',
        'Executed performance testing using Apache JMeter for load and stress testing scenarios',
        'Conducted API testing using Postman with automated test collections',
        'Created test plans, test cases, defect reports, and comprehensive test documentation',
      ],
    },
    {
        position: 'QA Senior Engineer',
        company: 'IDS TI',
        period: 'Nov 2019 - May 2020',
        location: '',
        tasks: [
            'Performed end-to-end, regression, and smoke testing for enterprise applications',
            'Designed and executed test plans, test cases, and comprehensive testing documentation',
            'Managed defect lifecycle and produced detailed test progress reports'
        ]
    },
    {
        position: 'QA Tester',
        company: 'BeJUMPER Consulting',
        period: 'Aug 2019 - Nov 2019',
        location: '',
        tasks: [
            'Managed tasks and defect reporting using Jira',
            'Performed requirement analysis and functional test case design for SQL databases and web services',
            'Prepared and maintained testing environments'
        ]
    },
    {
        position: 'Software Tester',
        company: 'NISSAN Mexicana',
        period: 'Jun 2016 - Jan 2019',
        location: '',
        tasks: [
            'Managed SAP transition from legacy C++ software to SAP Solution Manager',
            'Tested custom environments designed for local manufacturing operations',
            'Developed test strategies, test plans, and data requirements',
            'Performed white box testing including functionality and integration testing',
            'Conducted UAT presentations and test strategy reviews'
        ]
    }
  ],
  education: [
    {
      degree: 'Bachelor of Engineering in Robotics Engineering',
      institution: 'ESIME, Instituto Politécnico Nacional (IPN)',
      period: '2010 - 2015',
      location: 'Mexico City, Mexico',
      focus: 'Software Engineering, Automation Systems, Control Theory',
    },
    {
        degree: 'Technical Degree in Telecommunications',
        institution: 'CECYT No.10, Instituto Politécnico Nacional (IPN)',
        period: '2007 - 2010',
        location: 'Mexico City, Mexico'
    }
  ],
  technicalSkills: [
    {
      category: 'Test Automation & QA',
      skills: [
        'Selenium WebDriver (Expert)',
        'Cypress.io (Advanced)',
        'Appium (Mobile Testing)',
        'TestNG, JUnit (Frameworks)',
        'Cucumber, Mocha, Chai (BDD)',
        'HP Quality Center, Jira',
      ],
    },
    {
      category: 'Programming & Development',
      skills: [
        'Java (Expert Level)',
        'JavaScript, Node.js (Advanced)',
        'React.js (Frontend Development)',
        'Python (Data Analysis, ML)',
        'SQL, MongoDB (Databases)',
      ],
    },
    {
      category: 'DevOps & Tools',
      skills: [
        'GitLab CI/CD, Jenkins',
        'Docker, Kubernetes',
        'Gradle, Maven (Build Tools)',
        'Git, GitHub (Version Control)',
        'Postman, SoapUI (API Testing)',
        'JMeter (Performance Testing)',
      ],
    },
    {
        category: 'Methodologies & Practices',
        skills: [
            'Agile/SCRUM (Certified Practitioner)',
            'Test-Driven Development (TDD)',
            'Behavior-Driven Development (BDD)',
            'Continuous Integration/Deployment',
            'Page Object Model (POM)',
            'Risk-Based Testing'
        ]
    }
  ],
  projects: [
    {
      name: 'AI Testing Framework (Open Source)',
      url: 'github.com/ingcesaroman/ai-testing-framework',
      description:
        'Innovative testing framework leveraging AI for automated test case generation and execution using Java, Selenium WebDriver, and Model Context Protocol (MCP) with Playwright integration.',
      highlights: [
        'Thread-safe WebDriver management for parallel test execution',
        'AI-powered test generation from user stories',
        'Smart test execution with risk-based prioritization',
        'Self-healing test automation capabilities',
      ],
    },
    {
        name: 'Enterprise Insurance Testing Suite',
        description: 'ASCEND - Fortune 500 Client',
        highlights: [
            'Architected and implemented comprehensive test automation framework covering 20+ applications',
            'Reduced regression testing cycle time from 2 weeks to 2 days (85% reduction)',
            'Implemented country-specific test suites for multi-region deployment validation',
            'Achieved 99.5% uptime in production releases through rigorous automated testing'
        ]
    }
  ],
  continuousLearning: [
    'Generative AI & AI Agents - Codecademy (In Progress, 2024-2025)',
    'Data Analysis Fundamentals - Self-study for ML/LLM applications (2024)',
    'Advanced CI/CD & Docker - Professional Development (2023-2024)',
    'Full-Stack Web Development - JavaScript, React, Node.js, MongoDB (2022-2023)',
    'Agile & SCRUM Methodologies - Applied in production environment (2020-Present)',
  ],
  languages: [
    {
      name: 'Spanish',
      level: 'Native Language',
      details: ['Listening: C2', 'Reading: C2', 'Speaking: C2', 'Writing: C2'],
    },
    {
        name: 'English',
        level: 'Advanced Professional (C1)',
        details: [
            'Listening: C1',
            'Reading: C1',
            'Speaking: C1',
            'Writing: C1'
        ],
        note: 'Daily use in professional environment'
    },
    {
        name: 'German',
        level: 'Elementary (A1)',
        details: [
            'Listening: A1',
            'Reading: A1',
            'Speaking: A1',
            'Writing: A1'
        ],
        note: 'Enrolled in 2026 at Goethe-Institut with aspirations to return with FIMA program assistance.'
    }
  ],
  additionalInfo: [
    'Work Authorization: Mexican citizen, eligible for FIMA program visa sponsorship',
    'Availability: Ready to relocate to Germany with 2-month notice period',
    'Remote Work Experience: 5 years managing international teams remotely',
    'Cultural Adaptability: Proven experience working with multicultural teams (USA, Mexico, international clients)',
    'Professional Development: Active participant in tech communities, continuous learner in AI/ML technologies',
  ],
};
