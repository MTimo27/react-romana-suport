import React, { useState, useEffect } from 'react';
import dataSubII from '../data/subII';

function DropdownSubII(props) {
  //All the components state
  const [optionsGenul, setGenul] = useState([]);
  const [optionsSubiecte, setOptionsSubiecte] = useState(
    []
  );

  //The state for the download button
  const [downloadSubiectButton, setDownloadSubiectButton] =
    useState([]);

  //The state for the data selected by the use from the dropdown
  const [dropdownData, setDropdowndata] = useState({
    gen: '',
    subiect: '',
  });

  //Function that handles the change when the user selects an option
  function handleChange(event) {
    const { name, value } = event.target;

    setDropdowndata((prev) => {
      if (name === 'gen' && prev.gen !== value) {
        return {
          gen: value,
          subiect: '',
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
      //Creates the genuri options by mapping through the data
      let genuriComponents = dataSubII.map((item) => {
        return (
          <option
            className="option"
            key={item.gen}
            value={item.gen}
          >
            {item.gen}
          </option>
        );
      });

      //Sets the state of gen
      setGenul(genuriComponents);

      //Creates the subiecte options by mapping through the data
      let subiecteComponents = dataSubII.map((item) => {
        let array = [];
        if (item.gen.toString() === dropdownData.gen) {
          for (let i = 0; i < item.subiecte.length; i++) {
            array.push(
              <option
                className="option"
                key={`${item.subiecte[i]}-${dropdownData.gen}`}
                value={item.subiecte[i]}
              >
                {item.subiecte[i]}
              </option>
            );
          }
        }
        return array;
      });

      //Sets the state of subiecte
      setOptionsSubiecte(subiecteComponents);

      const subiectButton = () => {
        let buttonComponent;
        if (dropdownData.gen && dropdownData.subiect) {
          buttonComponent = (
            <button className="button button--dropdown">
              <a
                href={`/resurse/Bacalaureat/Sub II/${dropdownData.gen}/${dropdownData.subiect}.pdf`}
                download
              >
                Descarcă
              </a>
            </button>
          );
        } else {
          buttonComponent = [];
        }
        return buttonComponent;
      };
      setDownloadSubiectButton(subiectButton());
    };

    //Calls the function that creates all the components
    createComponents();
  }, [dropdownData]);

  return (
    <div className="dropdown">
      <p className="dropdown__title">{props.title}</p>
      <div className="container container--dropdown">
        <label htmlFor="gen">Selectează genul:</label>
        <select
          name="gen"
          value={dropdownData.gen}
          onChange={handleChange}
        >
          <option value="">-/-</option>
          {optionsGenul}
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="subiect">
          Selectează subiectul:
        </label>
        <select
          name="subiect"
          value={dropdownData.subiect}
          onChange={handleChange}
        >
          <option value="">-/-</option>
          {optionsSubiecte}
        </select>
      </div>

      <div className="container container--buttons">
        {downloadSubiectButton}
      </div>
    </div>
  );
}

export default DropdownSubII;
