'use client';
import React, { useState } from 'react';
import { CodeBlock } from '../../components/CodeBlock';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '../../components/ui/dialog';

const DocsPage = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      {/* Installation Section */}
      <section id="installation">
        <h1 className="text-4xl font-bold border-b pb-2">Installation</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Follow these steps to get the DevUI project running on your local machine for development.
        </p>

        <h2 className="text-2xl font-semibold mt-8">1. Fork the Repository</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          First, navigate to the main repository page on GitHub and click the 'Fork' button in the top-right corner. This will create a copy of the project under your own GitHub account.
        </p>

        <h2 className="text-2xl font-semibold mt-8">2. Clone Your Fork</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Now, clone the forked repository to your local machine. Replace `[your-username]` with your actual GitHub username.
        </p>
        <CodeBlock code="git clone https://github.com/[your-username]/DevUI.git" />

        <h2 className="text-2xl font-semibold mt-8">3. Navigate to the Directory</h2>
        <CodeBlock code="cd DevUI" />
        
        <h2 className="text-2xl font-semibold mt-8">4. Install Dependencies</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Install all the necessary packages using your preferred package manager.
        </p>
        <CodeBlock code="npm install" />
      </section>

      <section id="project-setup" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Project Setup</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          After installation, you can start the development server.
        </p>

        <h2 className="text-2xl font-semibold mt-8">Running the Development Server</h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          To start the local development server, run the following command:
        </p>
        <CodeBlock code="npm run dev" />
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          This will start the application, usually on `http://localhost:3000`. You can now view the project in your browser.
        </p>
      </section>

      {/* Gradient Card Example */}
      <section id="gradient-card" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Usage Example: Gradient Card</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Cards can have gradient backgrounds using the <code>gradient</code> and <code>gradientColors</code> props.
        </p>
        <div className="mt-6" style={{ maxWidth: 400 }}>
          <Card gradient gradientColors="from-pink-500 via-purple-500 to-indigo-500">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">Gradient Card</h2>
              <p>This card uses a gradient background.</p>
            </div>
          </Card>
          <div className="mt-4">
            <CodeBlock code={`<Card gradient gradientColors="from-pink-500 via-purple-500 to-indigo-500">
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-2">Gradient Card</h2>
    <p>This card uses a gradient background.</p>
  </div>
</Card>`} />
          </div>
        </div>
      </section>

      {/* Gradient Button Example */}
      <section id="gradient-button" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Usage Example: Gradient Button</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Use the <code>variant="gradient"</code> and <code>gradientColors</code> prop on any button.
        </p>
        <div className="mt-6 flex items-center space-x-4 rounded-md border p-4">
          <Button variant="gradient" gradientColors="from-pink-500 via-purple-500 to-indigo-500">Gradient Button</Button>
          <CodeBlock code={`<Button variant="gradient" gradientColors="from-pink-500 via-purple-500 to-indigo-500">Gradient Button</Button>`} />
        </div>
      </section>

      {/* Gradient Modal Example */}
      <section id="gradient-modal" className="mt-12">
        <h1 className="text-4xl font-bold border-b pb-2">Usage Example: Gradient Modal/Dialog</h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Modals (DialogContent) can have gradient backgrounds using the <code>gradient</code> and <code>gradientColors</code> props.
        </p>
        <div className="mt-6">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button variant="gradient" gradientColors="from-yellow-400 to-red-500">Open Gradient Modal</Button>
            </DialogTrigger>
            <DialogContent gradient gradientColors="from-yellow-400 to-red-500">
              <h2 className="text-xl font-bold mb-2">Gradient Modal</h2>
              <p>This modal uses a gradient background.</p>
            </DialogContent>
          </Dialog>
          <div className="mt-4">
            <CodeBlock code={`<Dialog>
  <DialogTrigger asChild>
    <Button variant="gradient" gradientColors="from-yellow-400 to-red-500">Open Gradient Modal</Button>
  </DialogTrigger>
  <DialogContent gradient gradientColors="from-yellow-400 to-red-500">
    <h2>Gradient Modal</h2>
    <p>This modal uses a gradient background.</p>
  </DialogContent>
</Dialog>`} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default DocsPage;