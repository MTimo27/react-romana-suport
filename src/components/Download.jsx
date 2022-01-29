import React from 'react';

function Download({ title, href }) {
  return (
    <div className="download">
      <p>{title}</p>
      <button className="button">
        <a href={href} download>
          Descarcă
        </a>
      </button>
    </div>
  );
}

export default Download;
