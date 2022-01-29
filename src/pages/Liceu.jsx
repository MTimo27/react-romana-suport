import React from 'react';
import Download from '../components/Download';
import DropdownEseuri from '../components/DropdownEseuri';
import DropdownTesteAnterioare from '../components/DropdownTesteAnterioare';
import DropdownTesteAntrenament from '../components/DropdownTesteAntrenament';

function Liceu() {
  let path = '/resurse/Bacalaureat';
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
            href={`${path}/Programa Bacalaureat 2022.pdf`}
          />
          <Download
            title={'Model Eseu Argumentativ Sub I'}
            href={`${path}/Sub I/Model Eseu Argumentativ Sub I.pdf`}
          />
          <Download
            title={'Modele de Rezolvare Sub II'}
            href={`${path}/Sub II/Modele de Rezolvare Sub II.pdf`}
          />
          <DropdownEseuri />
        </div>

        <div className="container container--section">
          <Download
            title={
              'Arhivă cu toate subiectele de antrenament și baremele lor'
            }
            href={`${path}/Teste de antrenament/Teste de Antrenament și Bareme Teste de Antrenament.rar`}
          />
          <DropdownTesteAntrenament
            title={'Subiecte de antrenament'}
          />
          <Download
            title={
              'Arhivă cu subiecte care s-au dat în anii anteriori și baremele lor'
            }
            href={`${path}/Subiecte din anii anteriori/Subiecte din anii anteriori.rar`}
          />
          <DropdownTesteAnterioare
            title={
              'Subiecte care s-au dat in anii anteriori'
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Liceu;
