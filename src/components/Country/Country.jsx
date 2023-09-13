import { useState } from "react";
import "./Country.css";

const Country = ({ country, handeVisitedCountry, handleFlagsClick }) => {
  const { name, capital, cca2, flags, population } = country;
  const [isVisited, setVisited] = useState(false);
  const visited = () => {
    setVisited(!isVisited);
  };
  return (
    <div className={`country, ${isVisited && "visited"}`}>
      <h3>Name: {name?.common}</h3>
      <p>Capital: {capital}</p>
      <img src={flags?.png} alt="" />
      <p>Populatoins: {population}</p>
      <p>Code: {cca2} </p>
      <button onClick={visited}>{isVisited ? "Visited" : "Going"}</button>
      <p>{isVisited ? "I have visited" : "I want to visit"}</p>
      <button onClick={() => handeVisitedCountry(country)}>Mark Visited</button>
      <button onClick={() => handleFlagsClick(country)}>Flags</button>
    </div>
  );
};

export default Country;
