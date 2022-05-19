// NPM Packages
import { useHistory } from "react-router";
// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/logo.png";
import { useSearch } from "state/SearchProvider";

export default function Navigation() {
  // Global state
  const { user } = useAuth();
  const { isLogged, setUser, setIsLogged } = useAuth();
  const history = useHistory();
  const { search } = useSearch();
  const { onChange } = useSearch();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setIsLogged(false);
    history.push("/");
  }
  const searchText = (
    <input value={search} onChange={onChange} placeholder="Search" />
  );

  return (
    <div>
      {isLogged && (
        <div id="nav">
          <nav className="navigation">
            <div className="logo">
              <img src={Logo} alt="" />
            </div>
            {user.isContentManager ? null : (
              <div className="nav-list">
                <ul>
                  <li>
                    <a href="#banner">Home</a>
                  </li>
                  <li>
                    <a href="#movies-carousel">Movies</a>
                  </li>
                  <li>
                    <a href="#scroll">Documentaries</a>
                  </li>
                  <li>
                    <a href="#tvshows-carousel">TV Shows</a>
                  </li>
                  <li className="search">{searchText}</li>
                </ul>
              </div>
            )}
            <div className="logout">
              <button onClick={onLogout}>Sign out</button>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
