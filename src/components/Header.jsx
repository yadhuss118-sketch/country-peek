import React from "react";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1>CountryPeek</h1>

      <nav className="header__nav">
        <button
          aria-label={
            theme === "light"
              ? "Switch to dark mode"
              : "Switch to light mode"
          }
          onClick={toggleTheme}
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </nav>
    </header>
  );
}

export default Header;