import React, { useState } from 'react';
import { CodeBlock } from '../../components/CodeBlock';
import Skeleton from '../../components/ui/Skeleton';
import { Button } from '../../components/ui/button';
import { Card } from '../../components/ui/card';
import { Dialog, DialogTrigger, DialogContent } from '../../components/ui/dialog';

const DocsPage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
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
  <CardTitle>Gradient Card</CardTitle>
  <CardDescription>This card uses a gradient background.</CardDescription>
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
