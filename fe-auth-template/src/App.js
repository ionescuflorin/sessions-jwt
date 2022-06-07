import React from 'react';
import { Outlet, Link } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      {/* Now click around again. 
          The parent route (App.js) persists while the <Outlet> swaps between the two child routes (<Invoices> and <Expenses>)!*/}
      <Outlet />
    </div>
  );
};

export default App;
