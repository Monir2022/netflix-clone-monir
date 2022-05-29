// NPM Packages
import { useHistory } from "react-router";
// Project files
import { useAuth } from "state/AuthProvider";
import Logo from "assets/logo.png";
import Search from "./Search";

export default function Navigation() {
  // Global state
  const { user } = useAuth();
  const { isLogged, setUser, setIsLogged } = useAuth();
  const history = useHistory();

  // Methods
  function onLogout() {
    localStorage.setItem("uid", "");
    setUser({});
    setIsLogged(false);
    history.push("/");
  }

  return (
    <div>
      {isLogged && (
        <div id="nav">
          <nav className="navigation">
            {user.isContentManager ? (
              <div className="nav-list_admin">
                <ul className="ul-flex">
                  <li className="logo">
                    <img src={Logo} alt="netflix logo" />
                  </li>
                  <li className="logout">
                    <button onClick={onLogout}>Sign out</button>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="nav-list">
                <ul className="ul-flex">
                  <li className="logo">
                    <img src={Logo} alt="" />
                  </li>
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
                    <a href="#series">Series</a>
                  </li>
                  <li>
                    <a href="#top10">Top 10 in Sweden</a>
                  </li>
                  <li>
                    <Search />
                  </li>
                  <li className="logout">
                    <button onClick={onLogout}>Sign out</button>
                  </li>
                </ul>
              </div>
            )}
          </nav>
        </div>
      )}
    </div>
  );
}
