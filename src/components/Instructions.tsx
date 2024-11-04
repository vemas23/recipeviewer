import React from 'react';

interface InstructionsProps {
  steps: string[];
}

export function Instructions({ steps }: InstructionsProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-gray-800">Zubereitung</h2>
      <ol className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex gap-4">
            <span className="flex-shrink-0 w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-medium">
              {index + 1}
            </span>
            <p className="text-gray-700">{step}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}