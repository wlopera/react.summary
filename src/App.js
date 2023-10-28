import React, { useState } from "react";
import Countries from "./components/Country/Countries";
import "./App.css";
import { dummy_countries } from "./data/data";
import NewCountry from "./components/NewCountry/NewCountry";

const App = () => {
  const [countries, setCountries] = useState(dummy_countries);

  console.log("Data:", countries);
  console.log("Paises:", { countries });

  const addNewCountryHandler = (newCountry) => {
    console.log(111, newCountry)
    setCountries((listCountries) => [...listCountries, newCountry]);
  };

  return (
    <div>
      <h1 className="contry-title"> Listado de Paises</h1>
      <NewCountry onAddCountry={addNewCountryHandler} />
      <Countries data={countries} />
    </div>
  );
};

export default App;
