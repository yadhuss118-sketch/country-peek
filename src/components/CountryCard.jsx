import { useFavourites } from "../context/FavouritesContext";

function CountryCard({ country }) {
  const { favourites, dispatch } = useFavourites();

  const { cca3 } = country;

  const isSaved = favourites.some((f) => f.cca3 === cca3);

  const handleClick = (e) => {
    e.stopPropagation();

    if (isSaved) {
      dispatch({ type: "REMOVE_FAVOURITE", payload: cca3 });
    } else {
      dispatch({ type: "ADD_FAVOURITE", payload: country });
    }
  };

  return (
    <div className="card">
      {/* existing UI */}

      <button
        className={`fav-btn ${isSaved ? "fav-btn--saved" : ""}`}
        onClick={handleClick}
      >
        {isSaved ? "♥ Saved" : "♡ Save"}
      </button>
    </div>
  );
}