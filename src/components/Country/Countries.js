import React from "react";
import "./Countries.css";

const Countries = ({ data }) => {
  console.log("PROP", data);
  return (
    <ul className="contry-list">
      {data.map((country) => (
        <li key={country.id}>{country.text}</li>
      ))}
    </ul>
  );
};
export default Countries;
