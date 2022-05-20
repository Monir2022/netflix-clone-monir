
//Project files
import { useSearch } from "state/SearchProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react/cjs/react.production.min";

export default function Search() {
  //Global state
  const { search } = useSearch();
  const { onChange, setSearch } = useSearch();


  

  
  
  

  const icon = <FontAwesomeIcon icon={faMagnifyingGlass} />

  return (
    <div id="search">
      <div className="icon">{icon}</div>
      <input value={search} onChange={onChange} placeholder="Search" />
      <button onClick={() => setSearch(" ")}>X</button>
      
    </div>
  );
}
