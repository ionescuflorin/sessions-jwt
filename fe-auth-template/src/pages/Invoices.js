import React from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../data';
import QueryNavLink  from '../components/QueryNavLink'

export default function Invoices() {
  let invoices = getInvoices();
  // React Router makes it easy to read and manipulate the search params with useSearchParams. 
  // It works a lot like React.useState() but stores and sets the state in the URL search params instead of in memory
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div style={{ display: 'flex' }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get('filter') || ''}
          onChange={(event) => {
            let filter = event.target.value;
            if (filter) {
              // setSearchParams() is putting the ?filter=... search params in the URL and rerendering the router.
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        />
        {invoices
          .filter((invoice) => {
            let filter = searchParams.get('filter');
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            // for active link swap link with navlink
            // normal string
            //     <NavLink className="red" />
            // function
            //   <NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: 'block',
                  margin: '1rem 0',
                  color: isActive ? 'red' : '',
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
              {invoice.name}
            </QueryNavLink>
          ))}
      </nav>
      <Outlet />
    </div>
  );
}
