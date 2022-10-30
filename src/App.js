import React, { useState, useEffect } from "react";
import "./app.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Countries from "./components/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    getApi()
  }, []);

  const getApi = () => {
    if(region === ""){
      fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
    }
  }

  const changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  // const filteredCountries = countries.filter((country) => {
  //   return country.name.toLowerCase().includes(search);
  // });

  const filteredCountries = countries.filter((country) => {
    return (
      country.region.toLowerCase().includes(region.toLowerCase()) &&
      country.name.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <Header theme={theme} changeTheme={changeTheme} />
      <Filter
        setSearch={setSearch}
        region={region}
        setRegion={setRegion}
        countries={countries}
        setCountries={setCountries}
      />

      <Countries filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
