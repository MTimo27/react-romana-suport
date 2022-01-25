import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__hero">
        <h1>
          <span
            style={{
              textTransform: 'uppercase',
              fontWeight: 800,
            }}
          >
            Română
          </span>
          suport
        </h1>
        <p>
          Resurse pentru orele de <br /> Limba și Literatura
          Română
        </p>
      </div>

      <div className="navbar__links">
        <p>Selectează ciclul: </p>
        <a href="/">Gimnazial</a>
        <p>/</p>
        <a href="/">Liceal</a>
      </div>
    </div>
  );
}

export default Navbar;
