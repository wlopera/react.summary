import React, { useState } from "react";

import "./NewCountry.css";

const NewCountry = ({ onAddCountry }) => {
  const [name, setName] = useState('');

  const addCountryHandler = (event) => {
    event.preventDefault()
    const newCountry = {
      id: new Date().getTime(),
      text: name
    }
    onAddCountry(newCountry)
    setName('')
  };

  const valueCountryHanlder = ({ target }) => {
    setName(target.value);
  };

  return (
    <form className="new-country" onSubmit={addCountryHandler}>
      <input type="text" value={name} onChange={valueCountryHanlder} />
      <button type="submit">Agregar País</button>
    </form>
  );
};

export default NewCountry;
