import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return (
    <h1>
      NPM SEARCH
    </h1>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(<App/>);
