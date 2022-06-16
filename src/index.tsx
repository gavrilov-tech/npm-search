import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store';
import Search from './pages/Search';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <Search />
      </Provider>
    </React.StrictMode>
  );
};

const root = createRoot(document.getElementById('root')!);

root.render(<App/>);
