import React from 'react';
import { CodeBlock } from '../components/CodeBlock';
import Skeleton from '@/components/ui/Skeleton';

const DocsPage = () => {
  return (
    <div>
      <section id="installation">
        <h1 className="text-4xl font-bold border-b pb-2">Installation</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Follow these steps to get the DevUI project running on your local machine.
        </p>
        <CodeBlock code="git clone https://github.com/[your-username]/DevUI.git" language="bash" />
      </section>
      
      <section id="project-setup" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Project Setup</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Start the development server.
        </p>
        <CodeBlock code="npm run dev" language="bash" />
      </section>

      <section id="usage-examples" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Usage Examples: Skeletons</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Example of a loading card placeholder.
        </p>
        <div className="mt-6 flex flex-col space-y-3 rounded-md border p-4">
          <Skeleton className="h-[125px] w-full rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;