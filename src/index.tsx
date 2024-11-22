import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router'; // RouterProvider without HashRouter or BrowserRouter
import { router } from './Router/Routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />  {/* No Router component wrapper needed */}
  </React.StrictMode>
);

reportWebVitals();
