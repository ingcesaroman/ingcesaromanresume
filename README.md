# Professional CV Generator for Web Portfolio

This project is a professional CV/Resume generator designed for integration into a web portfolio. Built with React and TypeScript, it allows for easy personalization and maintenance through a centralized data file. It also includes functionality to download the CV as a PDF.

## Features

-   **PDF Download**: Generate and download your CV as a professional PDF document.
-   **Dark Mode Toggle**: Switch between light and dark themes for enhanced viewing comfort.

## Project Architecture

The application follows a simple component-based architecture using React, with TypeScript for strong data typing. The structure is designed to be modular and scalable.

```
/
|-- public/
|   |-- favicon.ico
|-- src/
|   |-- assets/
|   |   |-- (images, icons, etc.)
|   |-- components/
|   |   |-- CvHeader.tsx
|   |   |-- CvSection.tsx
|   |   |-- (other reusable components)
|   |-- styles/
|   |   |-- main.css
|   |-- types/
|   |   |-- cv.ts (TypeScript interfaces for CV data structure)
|   |-- cv-data.ts (Centralized data file for CV content)
|   |-- App.tsx (Main application component)
|   |-- main.tsx (Entry point of the application)
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md
|-- tsconfig.json
|-- vite.config.ts
|-- .eslintrc.cjs
|-- postcss.config.js
|-- tailwind.config.js
```

### File and Directory Description

-   **`src/components/`**: Contains all reusable React components, e.g., `CvHeader.tsx` for the header, `CvSection.tsx` for sections like "Work Experience" or "Education".
-   **`src/types/cv.ts`**: Defines TypeScript interfaces for the CV data structure (e.g., `WorkExperience`, `Education`, `Skill`), ensuring data consistency.
-   **`src/cv-data.ts`**: A centralized file exporting an object with all the CV information (personal data, experience, education, etc.), adhering to the interfaces defined in `cv.ts`. This facilitates content updates without modifying component logic.
-   **`src/App.tsx`**: The main application component. It imports data from `cv-data.ts` and passes it to the relevant components to render the complete CV. Also includes PDF download functionality.
-   **`src/main.tsx`**: The entry point of the application, where the `App` component is rendered.
-   **`vite.config.ts`**: Configuration file for Vite, the bundler and development server used.
-   **`.eslintrc.cjs`**: ESLint configuration file for code quality and style checking.
-   **`postcss.config.js`**: PostCSS configuration, used by Tailwind CSS.
-   **`tailwind.config.js`**: Tailwind CSS configuration file.

## Technologies Used

-   **Framework**: React with Vite
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS (configured for class-based dark mode)
-   **Icons**: `lucide-react` for lightweight SVG icons.
-   **PDF Export**: `react-to-print` for converting the CV to a printable PDF.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

Ensure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [repository_url]
    cd ingcesaromanresume
    ```
    *(Replace `[repository_url]` with the actual URL of your repository)*

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Build the project (optional for development, recommended for deployment):**
    After installing dependencies or making significant updates, it's good practice to build the project.
    ```bash
    npm run build
    ```

### Running the Development Server

To start the development server and view the CV in your browser:

```bash
npm run dev
```

The application will typically be accessible at `http://localhost:5173/`.

### Customizing Your CV

To personalize the CV with your own information, edit the `src/cv-data.ts` file. This file contains all the structured data for the CV sections.

-   **`personalData`**: Your contact information and basic details.
-   **`professionalProfile`**: A summary of your professional background.
-   **`workExperience`**: Details of your previous and current jobs.
-   **`education`**: Your academic qualifications.
-   **`technicalSkills`**: Your technical proficiencies, categorized.
-   **`projects`**: Highlighted projects and achievements.
-   **`continuousLearning`**: Ongoing education and certifications.
-   **`languages`**: Your language skills.
-   **`additionalInfo`**: Any other relevant information.

Remember to follow the TypeScript interfaces defined in `src/types/cv.ts` to ensure your data is correctly structured.