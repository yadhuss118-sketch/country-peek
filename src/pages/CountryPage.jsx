import React from "react";

function CountryPage({ country }) {
  if (!country) return <p>Loading...</p>;

  const { name, flags, capital, subregion } = country;

  return (
    <div className="country-page">
      <img src={flags.svg} alt={`Flag of ${name.common}`} />

      <h2>{name.common}</h2>

      <p>Capital: {capital?.[0] ?? "N/A"}</p>
      <p>Subregion: {subregion ?? "N/A"}</p>
    </div>
  );
}

export default CountryPage;