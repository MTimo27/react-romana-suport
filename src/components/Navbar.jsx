import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__hero">
        <Link to="/">
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
            Resurse pentru orele de <br /> Limba și
            Literatura Română
          </p>
        </Link>
      </div>

      {/* <div className="navbar__links">
        <p>Selectează pagina: </p>
        <Link to="/resurse">Resurse</Link>
        <p>/</p>
        <Link to="/teste">Teste grila</Link>
      </div> */}
    </div>
  );
}

export default Navbar;
