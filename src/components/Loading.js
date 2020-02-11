import React from 'react';
import Logo from './Logo';

export default () => (
  <div className="d-flex flex-grow-1 justify-content-center align-items-center vh-100">
    <div className="text-center">
      <Logo />
      <h2>Ожидаем ~ 20-30 sek (Heroku free)</h2>
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
);
