import React, { useState, useEffect } from 'react';
import dataSubiecteAnterioare from '../data/dataSubiecteAnterioare';

function DropdownTesteAnterioare(props) {
  //All the components state
  const [optionsAni, setOptionsAni] = useState([]);
  const [optionsSubiecte, setOptionsSubiecte] = useState(
    []
  );

  //The state for the download button
  const [downloadSubiectButton, setDownloadSubiectButton] =
    useState([]);
  const [downloadBaremButton, setDownloadBaremButton] =
    useState([]);

  //The state for the data selected by the use from the dropdown
  const [dropdownData, setDropdowndata] = useState({
    an: '',
    sesiune: '',
  });

  //Function that handles the change when the user selects an option
  function handleChange(event) {
    const { name, value } = event.target;

    setDropdowndata((prev) => {
      if (name === 'an' && prev.an !== value) {
        return {
          an: value,
          sesiune: '',
        };
      } else
        return {
          ...prev,
          [name]: value,
        };
    });
    setDropdowndata((prev) => {
      return { ...prev };
    });
  }

  useEffect(() => {
    const createComponents = () => {
      //Creates the ani options by mapping through the data
      let aniComponents = dataSubiecteAnterioare.map(
        (item) => {
          return (
            <option
              className="option"
              key={item.an}
              value={item.an}
            >
              {item.an}
            </option>
          );
        }
      );

      //Sets the state of ani
      setOptionsAni(aniComponents);

      //Creates the subiecte options by mapping through the data
      let subiecteComponents = dataSubiecteAnterioare.map(
        (item) => {
          let array = [];
          if (item.an.toString() === dropdownData.an) {
            for (let i = 0; i < item.sesiuni.length; i++) {
              array.push(
                <option
                  className="option"
                  key={`${item.sesiuni[i]}-${dropdownData.an}`}
                  value={item.sesiuni[i]}
                >
                  {item.sesiuni[i]}
                </option>
              );
            }
          }
          return array;
        }
      );

      //Sets the state of subiecte
      setOptionsSubiecte(subiecteComponents);

      const subiectButton = () => {
        let buttonComponent;
        if (dropdownData.an && dropdownData.sesiune) {
          buttonComponent = (
            <button className="button button--dropdown">
              <a
                href={`/resurse/Bacalaureat/Subiecte din anii anteriori/${dropdownData.an}/${dropdownData.sesiune}/E_a_romana_real_tehn_${dropdownData.an}_var_${dropdownData.sesiune}.pdf`}
                download
              >
                Descarcă subiect
              </a>
            </button>
          );
        } else {
          buttonComponent = [];
        }
        return buttonComponent;
      };
      setDownloadSubiectButton(subiectButton());

      const baremButton = () => {
        let buttonComponent;
        if (dropdownData.an && dropdownData.sesiune) {
          buttonComponent = (
            <button className="button button--dropdown">
              <a
                href={`/resurse/Bacalaureat/Subiecte din anii anteriori/${dropdownData.an}/${dropdownData.sesiune}/E_a_romana_real_tehn_${dropdownData.an}_bar_${dropdownData.sesiune}.pdf`}
                download
              >
                Descarcă barem
              </a>
            </button>
          );
        } else {
          buttonComponent = [];
        }
        return buttonComponent;
      };
      setDownloadBaremButton(baremButton());
    };

    //Calls the function that creates all the components
    createComponents();
  }, [dropdownData]);

  return (
    <div className="dropdown">
      <p className="dropdown__title">{props.title}</p>
      <div className="container container--dropdown">
        <label htmlFor="an">Selectează anul:</label>
        <select
          name="an"
          value={dropdownData.an}
          onChange={handleChange}
        >
          <option value="">-/-</option>
          {optionsAni}
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="sesiune">
          Selectează sesiunea:
        </label>
        <select
          name="sesiune"
          value={dropdownData.sesiune}
          onChange={handleChange}
        >
          <option value="">-/-</option>
          {optionsSubiecte}
        </select>
      </div>

      <div className="container container--buttons">
        {downloadSubiectButton}
        {downloadBaremButton}
      </div>
    </div>
  );
}

export default DropdownTesteAnterioare;
