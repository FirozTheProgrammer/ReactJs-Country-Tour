import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCounties, setVisitedCountries] = useState([]);
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);

  const handeVisitedCountry = (country) => {
    // console.log(`visited country`);
    // console.log(country);
    // const newVisited = [...visitedCounties, country];
    setVisitedCountries([...visitedCounties, country]);
  };

  //   flag click handle function
  const handleFlagsClick = (country) => {
    setFlags([...flags, country]);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <h5>Visit Countries: {visitedCounties.length}</h5>
      <ul className="ul-style">
        {visitedCounties.map((country, key) => (
          <li key={key}>
            {country.name.common} <img src={country.flags?.png} alt="" />
          </li>
        ))}
      </ul>

      <h3>Visited Flags</h3>
      {flags.map((flag, fff) => (
        <img key={fff} className="flags" src={flag.flags?.png}></img>
      ))}
      <div className="country-grid-cols">
        {countries.map((country, key) => (
          <Country
            key={key}
            handleFlagsClick={handleFlagsClick}
            handeVisitedCountry={handeVisitedCountry}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
