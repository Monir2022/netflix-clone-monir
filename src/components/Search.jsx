//NPM packages
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

//Project files
import { useSearch } from "state/SearchProvider";

export default function Search() {
  //Global state
  const { search } = useSearch();
  const { onChange, setSearch } = useSearch();

  //Component
  const icon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  return (
    <div id="search">
      <div className="icon">{icon}</div>
      <input value={search} onChange={onChange} placeholder="Search" />
      <button onClick={() => setSearch(" ")}>X</button>
    </div>
  );
}
