import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // First things first, we want to connect your app to the browser's URL: import BrowserRouter and render it around your whole app.
  <BrowserRouter>
    {/* Config Routes */}
    <Routes>
      {/* Nested Routes */}
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
