import React from "react";

function Country({ country }) {
  return (
    <div className="country">
      <div className="country-flag">
        <img style={{ width: "150px" }} src={country.flag} alt="" />
      </div>

      <div className="country-name">
        <h1>{country.name}</h1>
      </div>

      <div className="country-population">
        <p>Population : {country.population}</p>
      </div>

      <div className="country-region">
        <p>Region : {country.region}</p>
      </div>

      <div className="country-capital">
        <p>Capital : {country.capital}</p>
      </div>
    </div>
  );
}

export default Country;
