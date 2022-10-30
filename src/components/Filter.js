import React from "react";

function Filter({ setSearch, region, setRegion }) {
  return (
    <div className="filter">
      <div className="input">
        <input
          type="text"
          placeholder="Search for a country..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="select">
        <select
          name="region"
          id="region"
          value={region}
          onChange={(e) => setRegion(e.target.value)}
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
