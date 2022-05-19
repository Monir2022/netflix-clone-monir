// NPM Package

import { createContext, useContext, useState } from "react";

// Properties
const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  // Local state
  const [search, setSearch] = useState("");
  const [find, setFind] = useState([]);

  return (
    <SearchContext.Provider value={{ search, setSearch, find, setFind }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
