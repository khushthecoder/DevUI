import React from 'react';
import { CodeBlock } from '../../components/CodeBlock';

const DocsPage = () => {
  return (
    <div>
      <section id="installation">
        <h1 className="text-4xl font-bold border-b pb-2">Installation</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Follow these steps to get the DevUI project running on your local machine for development.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Fork & Clone Repository</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          First, fork the repository and then clone it to your local machine.
        </p>
        <CodeBlock code="git clone https://github.com/[your-username]/DevUI.git" language="bash" />

        <h2 className="text-2xl font-semibold mt-8">2. Navigate and Install Dependencies</h2>
        <CodeBlock code="cd DevUI\nnpm install" language="bash" />
      </section>
      
      <section id="project-setup" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Project Setup</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          After installation, you can start the development server.
        </p>
        <CodeBlock code="npm run dev" language="bash" />
      </section>
    </div>
  );
};

export default DocsPage;