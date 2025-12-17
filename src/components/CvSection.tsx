import React from 'react';

interface CvSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CvSection({ title, children }: CvSectionProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-blue-900 mb-4 pb-2 border-b-2 border-blue-900 dark:text-blue-300 dark:border-blue-300">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </section>
  );
}
