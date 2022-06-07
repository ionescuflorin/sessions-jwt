import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Expenses from './pages/Expenses';
import Invoices from './pages/Invoices';
import Invoice from './pages/Invoice';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // First things first, we want to connect your app to the browser's URL: import BrowserRouter and render it around your whole app.
  <BrowserRouter>
    {/* Config Routes */}
    <Routes>
      {/* Nested Routes */}
      <Route path="/" element={<App />}>
        <Route path="expenses" element={<Expenses />} />
        <Route path="invoices" element={<Invoices />}>
          {/* Index route */}
          {/* Notice it has the index prop instead of a path. That's because the index route shares the path of the parent. That's the whole point--it doesn't have a path.
          Maybe you're still scratching your head. There are a few ways we try to answer the question "what is an index route?". Hopefully one of these sticks for you:

            Index routes render in the parent routes outlet at the parent route's path.
            Index routes match when a parent route matches but none of the other children match.
            Index routes are the default child route for a parent route.
            Index routes render when the user hasn't clicked one of the items in a navigation list yet. */}
          <Route
            index
            element={
              <main style={{ padding: '1rem' }}>
                <p>Select an invoice</p>
              </main>
            }
          />
          {/* Readin Url Params */}
          <Route path=":invoiceId" element={<Invoice />} />
        </Route>
        {/* No match route */}
        <Route
          // The "*" has special meaning here. It will match only when no other routes do.
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
