// NPM Package
import { createContext, useContext, useState } from "react";

//Project file
import { useStreaming } from "./StreamingProvider";

// Properties
const SearchContext = createContext(null);

export function SearchProvider({ children }) {
  //Global state
  const { videos } = useStreaming();
  // Local state
  const [search, setSearch] = useState("");
  const [find, setFind] = useState([]);

  function onChange(event) {
    setSearch(event.target.value);
    const find = videos.filter((video) => {
      return video.title.toLowerCase().includes(search);
    });
    setFind(find);
  }

  return (
    <SearchContext.Provider
      value={{ search, setSearch, find, setFind, onChange }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);

  return context;
}
