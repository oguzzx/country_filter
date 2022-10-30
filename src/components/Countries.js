import React from "react";
import Country from "./Country";

function Countries({filteredCountries }) {
  return (
    <div className="countries">
        {filteredCountries.map((country) => (
            <div className="country">
            <Country country={country} />
          </div>
        ))}
    </div>
  );
}

export default Countries;
