import React, { useState, useEffect } from 'react';
import data from '../data/subIII.js';

function DropdownEseuri() {
  //All the components state
  const [optionsAutori, setOptionsAutori] = useState([]);
  const [optionsOpere, setOptionsOpere] = useState([]);
  const [optionsEseuri, setOptionsEseuri] = useState([]);

  //The state for the download button
  const [downloadButton, setDownloadButton] = useState([]);

  //The state for the data selected by the user from the dropdown
  const [dropdownData, setDropdowndata] = useState({
    autor: '',
    opera: '',
    eseu: '',
  });

  //Function that handles the change when the user selects an option
  function handleChange(event) {
    const { name, value } = event.target;

    setDropdowndata((prev) => {
      if (name === 'autor' && prev.autor !== value) {
        return {
          autor: value,
          opera: '',
          eseu: '',
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
      //Creates the autori options by mapping through the data
      let autoriComponents = data.map((item) => {
        return (
          <option
            className="option"
            key={item.autor}
            value={item.autor}
          >
            {item.autor}
          </option>
        );
      });

      //Sets the state of autori
      setOptionsAutori(autoriComponents);

      //Creates the opere options by mapping through the data
      let opereComponents = data.map((item) => {
        if (item.autor === dropdownData.autor) {
          return item.opere.map((opera) => {
            return (
              <option
                className="option"
                key={opera.nume}
                value={opera.nume}
              >
                {opera.nume}
              </option>
            );
          });
        } else return ' ';
      });

      //Sets the state of opere
      setOptionsOpere(opereComponents);

      //Create the eseuri options by mapping through the data
      let eseuriComponents = data.map((item) => {
        if (item.autor === dropdownData.autor) {
          return item.opere.map((opera) => {
            if (opera.nume === dropdownData.opera) {
              return opera.eseuri.map((eseu) => {
                return (
                  <option
                    className="option"
                    key={eseu}
                    value={eseu}
                  >
                    {eseu}
                  </option>
                );
              });
            } else return '';
          });
        } else return '';
      });

      //Sets the state of eseuri
      setOptionsEseuri(eseuriComponents);

      const createButton = () => {
        let buttonComponent;
        if (
          dropdownData.autor &&
          dropdownData.opera &&
          dropdownData.eseu
        ) {
          buttonComponent = (
            <button className="button button--dropdown">
              <a
                href={`/resurse/Bacalaureat/Sub III/${dropdownData.autor}-${dropdownData.opera}-${dropdownData.eseu}.pdf`}
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

      //Sets the state of downloadButton
      setDownloadButton(createButton());
    };

    //Calls the function that creates all the components
    createComponents();
  }, [dropdownData]);

  return (
    <div className="dropdown">
      <p className="dropdown__title">Sub III</p>
      <div className="container container--dropdown">
        <label htmlFor="autor">Selectează autorul:</label>
        <select
          name="autor"
          value={dropdownData.autor}
          onChange={handleChange}
          className="select"
        >
          <option value="">-/-</option>
          {optionsAutori}
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="opera">Selectează opera:</label>
        <select
          name="opera"
          value={dropdownData.opera}
          onChange={handleChange}
          className="select"
        >
          <option value="">-/-</option>
          {optionsOpere}
        </select>
      </div>

      <div className="container container--dropdown">
        <label htmlFor="eseu">Selectează eseul:</label>
        <select
          name="eseu"
          value={dropdownData.eseu}
          onChange={handleChange}
          className="select"
        >
          <option value="">-/-</option>
          {optionsEseuri}
        </select>
      </div>

      <div className="container container--buttons">
        {downloadButton}
      </div>
    </div>
  );
}

export default DropdownEseuri;
