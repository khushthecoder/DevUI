'use client';

import React, { useState } from 'react';
import { Highlight, type PrismTheme } from 'prism-react-renderer';
import { Check, Copy } from 'lucide-react';

const customTheme: PrismTheme = {
  // ... (hamara custom theme object jaisa pehle tha waisa hi rahega)
  plain: { color: '#F8F8F2', backgroundColor: '#282A36' },
  styles: [
    { types: ['prolog', 'doctype', 'cdata', 'comment'], style: { color: '#6272A4' } },
    { types: ['punctuation'], style: { color: '#F8F8F2' } },
    { types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol', 'deleted'], style: { color: '#BD93F9' } },
    { types: ['selector', 'attr-name', 'string', 'char', 'builtin', 'inserted'], style: { color: '#50FA7B' } },
    { types: ['operator', 'entity', 'url', 'variable'], style: { color: '#F8F8F2' } },
    { types: ['atrule', 'attr-value', 'keyword'], style: { color: '#FF79C6' } },
    { types: ['function', 'class-name'], style: { color: '#8BE9FD' } },
    { types: ['regex', 'important'], style: { color: '#FFB86C' } },
  ],
};

interface CodeBlockProps {
  code: string;
  language?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'jsx' }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setIsCopied(true);
    setTimeout(() => { setIsCopied(false); }, 2000);
  };

  return (
    <Highlight
      theme={customTheme}
      code={code.trim()}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={`${className} relative p-4 rounded-md overflow-x-auto text-sm my-4`}
          style={style}
        >
          <button
            onClick={handleCopy}
            className="absolute top-2 right-2 p-1.5 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
            aria-label="Copy code to clipboard"
          >
            {isCopied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-gray-300" />}
          </button>
          {tokens.map((line, i) => (
            // Yahan se key={i} hata diya
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // Yahan se key={key} hata diya
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};