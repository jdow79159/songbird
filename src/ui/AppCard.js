import React from 'react';

export default ({ children }) => (
  <section className="py-2 card border-primary">
    <div className="row px-2">
      <div className="card-body row">{children}</div>
    </div>
  </section>
);
