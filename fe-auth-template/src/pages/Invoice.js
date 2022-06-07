import React from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { getInvoice, deleteInvoice } from '../data';

export default function Invoice() {
  let navigate = useNavigate();
  let location = useLocation();
  //  get the :invoiceId param from the URL:
  // :invoiceId -> params.invoiceId
  let params = useParams();
  // Note that we used parseInt around the param.
  // It's very common for your data lookups to use a number type, but URL params are always string.
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <main style={{ padding: '1rem' }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        {/* Navigate programatically */}
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate('/invoices' + location.search);
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
