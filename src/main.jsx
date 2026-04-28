import { ThemeProvider } from "./context/ThemeContext";
import { FavouritesProvider } from "./context/FavouritesContext";

<ThemeProvider>
  <FavouritesProvider>
    <App />
  </FavouritesProvider>
</ThemeProvider>;