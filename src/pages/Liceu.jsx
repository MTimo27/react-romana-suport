import React from 'react';
import Download from '../components/Download';
import DropdownEseuri from '../components/DropdownEseuri';
import DropdownTeste from '../components/DropdownTeste';

function Liceu() {
  return (
    <div className="liceu">
      <div className="liceu__title">
        <h1>Resurse Bacalaureat</h1>
        <div className="liceu__line"></div>
      </div>
      <div className="container container--liceu">
        <div className="container container--section">
          <Download
            title={'Programa Bacalaureat 2022'}
            href={'/'}
          />
          <Download
            title={'Model Eseu Argumentativ Sub I'}
            href={'/'}
          />
          <Download
            title={'Modele de Rezolvare Sub II'}
            href={'/'}
          />
          <DropdownEseuri />
        </div>

        <div className="container container--section">
          <Download
            title={
              'Arhivă cu toate subiectele de antrenament și baremele lor'
            }
            href={'/'}
          />
          <DropdownTeste
            title={'Subiecte de antrenament'}
          />
          <Download
            title={
              'Arhivă cu toate subiectele care s-au dat din anii anteriori și baremele lor'
            }
            href={'/'}
          />
          <DropdownTeste title={'Subiecte care s-au dat'} />
        </div>
      </div>
    </div>
  );
}

export default Liceu;
