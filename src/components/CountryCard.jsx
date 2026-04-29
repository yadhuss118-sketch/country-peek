import React from "react";

function CountryCard({ country, onToggleFavourite, isSaved }) {
  const { name, flags, population, region, capital } = country;

  return (
    <div className="card">
      <img src={flags.svg} alt={`Flag of ${name.common}`} />

      <h3 className="card__name">{name.common}</h3>

      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>Capital: {capital?.[0] ?? "N/A"}</p>

      <button
        aria-label={
          isSaved
            ? `Remove ${name.common} from favourites`
            : `Save ${name.common} to favourites`
        }
        aria-pressed={isSaved}
        onClick={() => onToggleFavourite(country)}
      >
        {isSaved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}

export default CountryCard;