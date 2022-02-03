import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <h1>Link-uri utile</h1>
      <div className="footer__links">
        <ul>
          <li>
            <a
              href="https://www.edu.ro/"
              rel="noreferrer"
              target="_blank"
            >
              Ministerul Educației
            </a>
          </li>
          <li>
            <a
              href="https://www.edupedu.ro/"
              rel="noreferrer"
              target="_blank"
            >
              Edupedu
            </a>
          </li>
          <li>
            <a
              href="https://liceunet.ro/bacalaureat/romana"
              rel="noreferrer"
              target="_blank"
            >
              Liceunet
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="http://subiecte.edu.ro/2022/"
              rel="noreferrer"
              target="_blank"
            >
              Subiecte.edu
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/playlist?list=PLxO8-C91Lp91zeE89r1y0oIttwh_n2lvQ"
              rel="noreferrer"
              target="_blank"
            >
              Teleșcoala
            </a>
          </li>
          <li>
            <a
              href="https://www.academia.edu/"
              rel="noreferrer"
              target="_blank"
            >
              Academia.edu
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://deacoffee.com/"
              rel="noreferrer"
              target="_blank"
            >
              DeaCoffee
            </a>
          </li>
          <li>
            <a
              href="https://10laromana.ro"
              rel="noreferrer"
              target="_blank"
            >
              10LaRomână
            </a>
          </li>
          <li>
            <a
              href="http://mariadius.com/bac/"
              rel="noreferrer"
              target="_blank"
            >
              Mariadius
            </a>
          </li>
        </ul>
      </div>
      <div className="footer__line"></div>
      <div className="footer__credits">
        <p>
          Website realizat de{' '}
          <a
            href="https://github.com/MTimo27"
            rel="noreferrer"
            target="_blank"
          >
            Mihai Timoficiuc
          </a>{' '}
          în colaborare cu Doamna Profesor Doctor Narcisa
          Adochiei
        </p>
      </div>
    </div>
  );
}

export default Footer;
