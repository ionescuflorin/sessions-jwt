import React from 'react';
import { useParams } from 'react-router-dom';
import { getInvoice } from "../data";

export default function Invoice() {
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
    </main>
  );
}
