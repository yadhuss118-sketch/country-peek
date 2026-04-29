import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CountryCard from "../components/CountryCard";

function Home() {
  const [query, setQuery] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    if (!query.trim()) return; // prevent empty search

    const fetchCountries = async () => {
      try {
        const res = await fetch(
          `https://restcountries.com/v3.1/name/${query}`
        );
        const data = await res.json();
        setCountries(data);
      } catch (err) {
        setCountries([]);
      }
    };

    fetchCountries();
  }, [query]);

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />

      {countries.length === 0 && <p>No countries found</p>}

      <div className="cards-grid">
        {countries.map((c) => (
          <CountryCard key={c.cca3} country={c} />
        ))}
      </div>
    </div>
  );
}

export default Home;