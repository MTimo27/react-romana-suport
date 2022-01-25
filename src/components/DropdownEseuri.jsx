import React from 'react';

function DropdownEseuri() {
  return (
    <div className="dropdown">
      <p className="dropdown__title">Sub III</p>
      <div className="container container--dropdown">
        <label htmlFor="autori">Selectează autorul:</label>
        <select name="autori">
          <option value="">-/-</option>
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="opere">Selectează opera:</label>
        <select name="opere">
          <option value="">-/-</option>
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="eseuri">Selectează eseul:</label>
        <select name="eseuri">
          <option value="">-/-</option>
        </select>
      </div>
      <div className="container container--buttons">
        <button className="button button--dropdown">
          Descarcă
        </button>
      </div>
    </div>
  );
}

export default DropdownEseuri;
