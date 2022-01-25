import React from 'react';

function DropdownTeste(props) {
  return (
    <div className="dropdown">
      <p className="dropdown__title">{props.title}</p>
      <div className="container container--dropdown">
        <label htmlFor="ani">Selectează anul:</label>
        <select name="ani">
          <option value="">-/-</option>
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="subiecte">
          Selectează subiectul:
        </label>
        <select name="subiecte">
          <option value="">-/-</option>
        </select>
      </div>

      <div className="container container--buttons">
        <button className="button button--dropdown">
          Descarcă subiect
        </button>

        <button className="button button--dropdown">
          Descarcă barem
        </button>
      </div>
    </div>
  );
}

export default DropdownTeste;
