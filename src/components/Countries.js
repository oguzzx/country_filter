import React from "react";
import Country from "./Country";

function Countries({filteredCountries, theme, setTheme}) {
  return (
    <div className="countries" style={{
      backgroundColor: theme === "light" ? "white" : "#1C271C",
      color : theme === "light" ? "black" : "white"
    }}>
        {filteredCountries.map((country) => (
            <div className="country">
            <Country country={country} />
          </div>
        ))}
    </div>
  );
}

export default Countries;
