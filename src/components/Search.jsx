import { useState } from "react";
//Project files
import { useSearch } from "state/SearchProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Search() {
  //Global state
  const { search } = useSearch();
  const { onChange, setSearch } = useSearch();
  const { find } = useSearch();

  const [message, setMessage] = useState(" ");
   
  const icon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <div id="search">
      <div className="icon">{icon}</div>
      <input value={search} onChange={onChange} placeholder="Search" />      
      <button onClick={() => setSearch(" ")}>X</button>
    </div>
  );
}
