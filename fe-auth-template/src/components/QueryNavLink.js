/**
 * If you filter the list and then click a link, you'll notice that the list is no longer filtered and the search param is cleared from the <input> and the URL.
 * You might want this, you might not! Maybe you want to keep the list filtered and keep the param in the URL.
 * We can persist the query string when we click a link by adding it to the link's href. We'll do that by composing NavLink and useLocation from React Router into our own QueryNavLink (maybe there's a better name, but that's what we're going with today).
 */
import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

export default function QueryNavLink({ to, ...props }) {
    /**
     * Like useSearchParams, useLocation returns a location that tells us information about the URL. A location looks something like this:
      {
         pathname: "/invoices",
        search: "?filter=sa",
        hash: "",
        state: null,
        key: "ae4cz2j"
     }
     */
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
